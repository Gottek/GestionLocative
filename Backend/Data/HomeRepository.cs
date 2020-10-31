using System;
using System.Collections.Generic;
using System.Linq;
using Backend.Models;

namespace Backend.Data
{
    public class HomeRepository : IHomes
    {
        private readonly CommanderContexte _contexte;

        public HomeRepository(CommanderContexte contexte)
        {
            _contexte = contexte;
        }

        public bool SaveChange()
        {
            return _contexte.SaveChanges()>=0;
        }

        public IEnumerable<Home> getHomeList()
        {
            return _contexte.Homes.ToList();
        }

        public Home getSpecificHomeById(int id)
        {
            return _contexte.Homes.FirstOrDefault(home => home.id == id);
        }

        public void createHome(Home home)
        {
            if(home==null) throw new ArgumentException(nameof(home));
            
            _contexte.Homes.Add(home);
        }

        public void updateAHome(Home home) { }


        public void deleteHome(Home home)
        {
            if(home==null) throw new ArgumentException(nameof(home));
            _contexte.Homes.Remove(home);
        }
    }
}