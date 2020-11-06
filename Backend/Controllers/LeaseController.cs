using System;
using System.Collections.Generic;
using System.Reflection;
using System.Threading.Tasks;
using AutoMapper;
using Backend.Data;
using Backend.Dtos;
using Backend.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using BigFile=System.IO.File;
using Word = Microsoft.Office.Interop.Word;

namespace Backend.Controllers
{
    [Route("api/lease")]
    [ApiController]
    public class LeaseController: ControllerBase
    {
        private object matchCase = true;
        private object matchWholeWord = true;
        private object matchWildCards = false;
        private object matchSoundLike = false;
        private object nmatchAllforms = false;
        private object forward = true;
        private object format = false;
        private object matchKashida = false;
        private object matchDiactitics = false;
        private object matchAlefHamza = false;
        private object matchControl = false;
        private object read_only = false;
        private object visible = true;
        private object replace = 2;
        private object wrap = 1;
        private readonly ILease _leaseRepository;
        private readonly IHomes _homesRepository;
        private readonly IOwner _ownerRepository;
        private readonly IMapper _mapper;
        private String[] chevronArray = {
            "<civility>","<firstName>","<lastName>","<firstNameGarant>", "<lastNameGarant>", 
            "<adress>", "<personAdresse>", "<phoneNumberGarant>", "<phoneNumber>",
            "<roomNumber>", "<totalArea>", "<livingRoomArea>", "<diningRoomArea>", 
            "<rentPrice>", "<flatRateCharges>", "<type>", "<email>", "<leaseStartDate>", "<leaseEndDate>",
            "<leaseTerm>", "<releaseDate>", "<waterMeterIndexInput>", "<electricityMeterIndexInput>", "<electricityMeterIndexOutput>",
            "<gazMeterIndexOutput>", "<gazMeterIndexInput>", "<waterMeterIndexOutput>", "<garanteeAmount>", "<signatureDate>", "<baseIndex>",
            "<firstMonthPaid>", "<depositPaid>", "<depositPayementDate>", "<idBail>", "<entryDate>", "<gender>"}; 
        public LeaseController(ILease leaseRepo,IOwner ownerRepository,IHomes homesRepository, IMapper mapper)
        {
            _homesRepository = homesRepository;
            _leaseRepository = leaseRepo;
            _ownerRepository = ownerRepository;
            _mapper = mapper;
        }
        
        [HttpGet]
        public ActionResult<IEnumerable<Lease>> GetAllLeases()
        {
            var leaseList = _leaseRepository.getLeaseList();
            return Ok(leaseList);
        }
        
        [HttpGet("{id}",Name ="GetSingleLease" )]
        public ActionResult<LeaseReadDtos> GetSingleLease(int id)
        {
            var singleLease = _leaseRepository.getSpecificLeaseById(id);
            if (singleLease == null) return NotFound();
            return Ok(_mapper.Map<LeaseReadDtos>(singleLease));
        }
        [HttpPost]
        public ActionResult<Lease> CreateLease(Lease lease)
        {
            
            _leaseRepository.createLease(lease); 
            _leaseRepository.SaveChange();

            return Ok(lease);

        }
        
        [HttpPut("{id}")]
        public ActionResult UpdateLease(int id , Lease updateLease)
        {
            var leaseInitial = _leaseRepository.getSpecificLeaseById(id);
            _mapper.Map(updateLease, leaseInitial);
            _leaseRepository.SaveChange();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteLease(int id)
        {
            var leaseInitial = _leaseRepository.getSpecificLeaseById(id);
            if (leaseInitial == null) return NotFound();
            _leaseRepository.deleteLease(leaseInitial);
            _leaseRepository.SaveChange();
            return NoContent();
        }
        
        
        [HttpPost("word/{path}")]
        public ActionResult<LeaseReadDtos> makeWordDocument(Lease lease, string path)
        {
            // Console.WriteLine(path);
            // Console.WriteLine(saleObject.garanteeAmount);
            string fileName = @"C:\Users\Amarl\Documents\Template" + path+".docx";
            string saveAs = @"C:\Users\Amarl\Desktop\Exemplaire" + path+lease.LeaseId+".docx";
            CreateWordDocument(fileName,saveAs,lease);
            return Ok();
        }
        
        
        private void FindAndReplace(Word.Application wordApp, object Chevron, object textReplaced)
        {
            wordApp.Selection.Find.Execute(ref Chevron,
                ref matchCase, ref matchWholeWord,
                ref matchWildCards, ref matchSoundLike,
                ref nmatchAllforms, ref forward,
                ref wrap, ref format, ref textReplaced,
                ref replace, ref matchKashida,
                ref matchDiactitics, ref matchAlefHamza,
                ref matchControl);
        }

        private void CreateWordDocument(object filename, object SaveAs, Lease lease)
        {
            var singleHome = _homesRepository.getSpecificHomeById(lease.homeId);
            var singleOwner = _ownerRepository.getSpecificOwnerById(lease.personId);
            var singleGuarantor=_ownerRepository.getSpecificGarantById(singleOwner.id);
            Word.Application wordApp = new Word.Application();
            object ms = Missing.Value;
            Word.Document myWordDoc = null;

            if (BigFile.Exists((string)filename))
            {
                object readOnly = false;
                object isVisible = false;
                wordApp.Visible = false;

                myWordDoc = wordApp.Documents.Open(ref filename, ref ms, ref readOnly, ref ms, ref ms, ref ms, ref ms, ref ms, ref ms, ref ms, ref ms, ref ms, ref ms, ref ms, ref ms, ref ms);
                myWordDoc.Activate();
                Object[] methodArray = { singleOwner.civility,singleOwner.firstName, singleOwner.lastName
                    , singleGuarantor.firstName, singleGuarantor.lastName, singleHome.adress
                    , singleOwner.address, singleGuarantor.phoneNumber, singleOwner.phoneNumber
                    , singleHome.roomNumber, singleHome.totalArea, singleHome.livingRoomArea
                    , singleHome.diningRoomArea, singleHome.rentPrice, singleHome.flatRateCharges
                    , singleHome.type, singleOwner.email, lease.leaseStartDate
                    , lease.leaseEndDate, lease.leaseTerm, lease.releaseDate
                    , lease.waterMeterIndexInput, lease.electricityMeterIndexInput, lease.electricityMeterIndexOutput
                    , lease.gazMeterIndexOutput, lease.gazMeterIndexInput, lease.waterMeterIndexOutput
                    , lease.garanteeAmount, lease.signatureDate, lease.baseIndex
                    , lease.firstMonthPaid, lease.depositPaid, lease.depositPaymentDate
                    , lease.LeaseId, lease.entryDate, singleOwner.gender};
                
                for (int i = 0; i < chevronArray.Length; i++)
                {
                    FindAndReplace(wordApp,chevronArray[i],methodArray[i]);
                }
            }
            else Console.WriteLine("Y'a eu un problème dans la création");
            

            myWordDoc.SaveAs2(ref SaveAs);
            myWordDoc.Close();
            wordApp.Quit();
            Console.WriteLine("Le fichier "+SaveAs+" a été créée");
        }
    }
}