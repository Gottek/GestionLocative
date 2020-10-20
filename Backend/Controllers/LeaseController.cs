using System.Collections.Generic;
using AutoMapper;
using Backend.Data;
using Backend.Dtos;
using Backend.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/lease")]
    [ApiController]
    public class LeaseController: ControllerBase
    {
        private readonly ILease _leaseRepository;
        private readonly IMapper _mapper;
        public LeaseController(ILease leaseRepo, IMapper mapper)
        {
            _leaseRepository = leaseRepo; 
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
        public ActionResult<LeaseCreateDtos> CreateLease(LeaseCreateDtos leaseDtos)
        {
            var leaseModel = _mapper.Map<Lease>(leaseDtos); // demande un leaseCreateDtos pour lui retourner un Lease normale
            _leaseRepository.createLease(leaseModel); // sinon cette méthode ne fonctionnerait pas 
            _leaseRepository.SaveChange();

            var leaseReadDtos = _mapper.Map<LeaseReadDtos>(leaseModel); // retourne un owerReadDtos sur base d'un Lease normale
            // retourne ce que "GetSingleLease" retourne en lui passant en paramètre l'id qu'on souhaite 
            return CreatedAtRoute(nameof(GetSingleLease), new {id = leaseReadDtos.id},leaseReadDtos);
        }
        
        [HttpPut("{id}")]
        public ActionResult UpdateLease(int id , LeaseUpdateDtos updateLeaseDtos)
        {
            var leaseInitial = _leaseRepository.getSpecificLeaseById(id);
            _mapper.Map(updateLeaseDtos, leaseInitial);
            _leaseRepository.updateALease(leaseInitial);
            _leaseRepository.SaveChange();
            return NoContent();
        }
        
        [HttpPatch("{id}")]
        public ActionResult UpdateLeaseWithPatch(int id , JsonPatchDocument<LeaseUpdateDtos> patchDocument)
        {
            var leaseInitial = _leaseRepository.getSpecificLeaseById(id);
            var patchLease = _mapper.Map<LeaseUpdateDtos>(leaseInitial);
            patchDocument.ApplyTo(patchLease,ModelState);
            if (!TryValidateModel(patchLease)) return ValidationProblem(ModelState);
            _mapper.Map(patchLease, leaseInitial);
            _leaseRepository.updateALease(leaseInitial);
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
    }
}