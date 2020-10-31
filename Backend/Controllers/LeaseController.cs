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

                FindAndReplace(wordApp, "<civility>", singleOwner.civility);
                FindAndReplace(wordApp, "<firstName>", singleOwner.firstName);
                FindAndReplace(wordApp, "<lastName>", singleOwner.lastName);
                FindAndReplace(wordApp, "<firstNameGarant>", singleOwner.firstName);
                FindAndReplace(wordApp, "<lastNameGarant>", singleOwner.lastName);
                FindAndReplace(wordApp, "<adress>", singleHome.adress);
                FindAndReplace(wordApp, "<personAdresse>", singleOwner.address);
                FindAndReplace(wordApp, "<phoneNumberGarant>", singleOwner.phoneNumber);
                FindAndReplace(wordApp, "<phoneNumber>", singleOwner.phoneNumber);
                FindAndReplace(wordApp, "<roomNumber>", singleHome.roomNumber);
                FindAndReplace(wordApp, "<totalArea>", singleHome.totalArea);
                FindAndReplace(wordApp, "<livingRoomArea>", singleHome.livingRoomArea);
                FindAndReplace(wordApp, "<diningRoomArea>", singleHome.diningRoomArea);
                FindAndReplace(wordApp, "<rentPrice>", singleHome.rentPrice);
                FindAndReplace(wordApp, "<flatRateCharges>", singleHome.flatRateCharges);
                FindAndReplace(wordApp, "<type>", singleHome.type);
                FindAndReplace(wordApp, "<email>", singleOwner.email);
                FindAndReplace(wordApp, "<leaseStartDate>", lease.leaseStartDate);
                FindAndReplace(wordApp, "<leaseEndDate>", lease.leaseEndDate);
                FindAndReplace(wordApp, "<leaseTerm>", lease.leaseTerm);
                FindAndReplace(wordApp, "<releaseDate>", lease.releaseDate);
                FindAndReplace(wordApp, "<waterMeterIndexInput>", lease.waterMeterIndexInput);
                FindAndReplace(wordApp, "<electricityMeterIndexInput>", lease.electricityMeterIndexInput);
                FindAndReplace(wordApp, "<electricityMeterIndexOutput>", lease.electricityMeterIndexOutput);
                FindAndReplace(wordApp, "<gazMeterIndexOutput>", lease.gazMeterIndexOutput);
                FindAndReplace(wordApp, "<gazMeterIndexInput>", lease.gazMeterIndexInput);
                FindAndReplace(wordApp, "<waterMeterIndexOutput>", lease.waterMeterIndexOutput);
                FindAndReplace(wordApp, "<garanteeAmount>", lease.garanteeAmount);
                FindAndReplace(wordApp, "<signatureDate>", lease.signatureDate);
                FindAndReplace(wordApp, "<baseIndex>", lease.baseIndex);
                FindAndReplace(wordApp, "<firstMonthPaid>", lease.firstMonthPaid);
                FindAndReplace(wordApp, "<depositPaid>", lease.depositPaid);
                FindAndReplace(wordApp, "<depositPayementDate>", lease.depositPaymentDate);
                FindAndReplace(wordApp, "<idBail>", lease.LeaseId);
                FindAndReplace(wordApp, "<entryDate>", lease.entryDate);
                FindAndReplace(wordApp, "<gender>", singleOwner.gender);
            }
            else Console.WriteLine("Y'a eu un problème dans la création");
            

            myWordDoc.SaveAs2(ref SaveAs);
            myWordDoc.Close();
            wordApp.Quit();
            Console.WriteLine("Le fichier "+SaveAs+" a été créée");
        }
    }
}