using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices.WindowsRuntime;
using AutoMapper;
using Backend.Data;
using Backend.Dtos;
using Backend.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    // le ownerRepo se fait remplacer par n'importe quel composant qui est mit dans le scope du startUp, ce composant
    // possède un accès à un contexte qui lui-même est lié avec la base de donnée et peut recuperer et ajouter des données dedans
    // le mapper sert juste à faire la liaison avec les données dit "limité (Dtos)" pour l'utilisateur
    [Route("api/owner")]
    [ApiController]
    public class OwnerController : ControllerBase
    {
        private readonly IOwner _ownerRepository;
        private readonly IMapper _mapper;
        public OwnerController(IOwner ownerRepository, IMapper mapper)
        {
            
            _ownerRepository = ownerRepository; 
            _mapper = mapper;
        }
        
        [HttpGet]
        public ActionResult<IEnumerable<Owner>> GetAllOwners()
        {
            var ownerList = _ownerRepository.getOwnerList();
            return Ok(ownerList);
        }
        
        [HttpGet("{id}",Name ="GetSingleOwner" )]
        public ActionResult<OwnerReadDtos> GetSingleOwner(int id)
        {
            var singleOwner = _ownerRepository.getSpecificOwnerById(id);
            if (singleOwner == null) return NotFound();
            return Ok(_mapper.Map<OwnerReadDtos>(singleOwner));
        }
        
        /*[HttpPost]
        public ActionResult<OwnerCreateDtos> CreateOwner(OwnerCreateDtos ownerDtos)
        {
            var ownerModel = _mapper.Map<Owner>(ownerDtos); // demande un ownerCreateDtos pour lui retourner un Owner normale
            _ownerRepository.createOwner(ownerModel); // sinon cette méthode ne fonctionnerait pas 
            _ownerRepository.SaveChange();

            var ownerReadDtos = _mapper.Map<OwnerReadDtos>(ownerModel); // retourne un owerReadDtos sur base d'un Owner normale
            // retourne ce que "GetSingleOwner" retourne en lui passant en paramètre l'id qu'on souhaite 
            return CreatedAtRoute(nameof(GetSingleOwner), new {id = ownerReadDtos.id},ownerReadDtos);
        }*/
        
        [HttpPost]
        public ActionResult<Owner> CreateOwner(Owner owner)
        {
            
             _ownerRepository.createOwner(owner); 
             _ownerRepository.SaveChange();

            return Ok(owner);

        }
        
        [HttpPut("{id}")]
        public ActionResult UpdateOwner(int id , OwnerUpdateDtos updateOwnerDtos)
        {
            var ownerInitial = _ownerRepository.getSpecificOwnerById(id);
            _mapper.Map(updateOwnerDtos, ownerInitial);
            _ownerRepository.updateAOwner(ownerInitial);
            _ownerRepository.SaveChange();
            return NoContent();
        }
        
        [HttpPatch("{id}")]
        public ActionResult UpdateOwnerWithPatch(int id , JsonPatchDocument<OwnerUpdateDtos> patchDocument)
        {
            var ownerInitial = _ownerRepository.getSpecificOwnerById(id);
            var patchOwner = _mapper.Map<OwnerUpdateDtos>(ownerInitial);
            patchDocument.ApplyTo(patchOwner,ModelState);
            if (!TryValidateModel(patchOwner)) return ValidationProblem(ModelState);
            _mapper.Map(patchOwner, ownerInitial);
            _ownerRepository.updateAOwner(ownerInitial);
            _ownerRepository.SaveChange();
            return NoContent();
        }
        
        [HttpDelete("{id}")]
        public ActionResult DeleteOwner(int id)
        {
            var ownerInitial = _ownerRepository.getSpecificOwnerById(id);
            if (ownerInitial == null) return NotFound();
            _ownerRepository.deleteOwner(ownerInitial);
            _ownerRepository.SaveChange();
            return NoContent();
        }
        
    }
}

 /*
  Questions : 
 à quoi sert la value dans la dernière partie de la ligne 52 ?
 */