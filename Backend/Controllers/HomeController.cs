using System;
using System.Collections.Generic;
using AutoMapper;
using Backend.Data;
using Backend.Dtos;
using Backend.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    //faire les migrations car j'ai pas sauvegarder mes changement de models
    [Route("api/home")]
    [ApiController]
    public class HomeController: ControllerBase
    {
        private readonly IHomes _homesRepository;
        private readonly IMapper _mapper;
        
        public HomeController(IHomes homeRepo, IMapper mapper)
        {
            _homesRepository = homeRepo; 
            _mapper = mapper;
        }
        
        [HttpGet]
        public ActionResult<IEnumerable<Home>> GetAllHomes()
        {
            var homeList = _homesRepository.getHomeList();
            return Ok(homeList);
        }
        
        [HttpGet("{id}",Name ="GetSingleHome" )]
        public ActionResult<HomeReadDtos> GetSingleHome(int id)
        {
            var singleHome = _homesRepository.getSpecificHomeById(id);
            if (singleHome == null) return NotFound();
            return Ok(_mapper.Map<HomeReadDtos>(singleHome));
        }
        
        [HttpPost]
        public ActionResult<Home> CreateHome(Home home)
        {
            _homesRepository.createHome(home); 
            _homesRepository.SaveChange();

            return Ok(home);

        }

        
        [HttpPut("{id}")]
        public ActionResult UpdateHome(int id , Home updateHome)
        {
            var homeInitial = _homesRepository.getSpecificHomeById(id);
            _mapper.Map(updateHome, homeInitial);
            //_homesRepository.updateAHome(homeInitial);
            _homesRepository.SaveChange();
            return Ok();
        }
        
        // [HttpPatch("{id}")]
        // public ActionResult UpdateHomeWithPatch(int id , JsonPatchDocument<HomeUpdateDtos> patchDocument)
        // {
        //     var homeInitial = _homesRepository.getSpecificHomeById(id);
        //     var patchHome = _mapper.Map<HomeUpdateDtos>(homeInitial);
        //     patchDocument.ApplyTo(patchHome,ModelState);
        //     if (!TryValidateModel(patchHome)) return ValidationProblem(ModelState);
        //     _mapper.Map(patchHome, homeInitial);
        //     _homesRepository.updateAHome(homeInitial);
        //     _homesRepository.SaveChange();
        //     return NoContent();
        // }
        
        [HttpDelete("{id}")]
        public ActionResult DeleteHome(int id)
        {
            var homeInitial = _homesRepository.getSpecificHomeById(id);
            if (homeInitial == null) return NotFound();
            _homesRepository.deleteHome(homeInitial);
            _homesRepository.SaveChange();
            return NoContent();
        }
    }
}