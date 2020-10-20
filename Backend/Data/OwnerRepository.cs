using System;
using System.Collections.Generic;
using System.Linq;
using Backend.Models;

namespace Backend.Data
{
    public class OwnerRepository : IOwner
    {
        private readonly CommanderContexte _contexte;

        public OwnerRepository(CommanderContexte contexte)
        {
            _contexte = contexte;
        }

        public bool SaveChange()
        {
            return _contexte.SaveChanges()>=0;
        }

        public IEnumerable<Owner> getOwnerList()
        {
            return _contexte.Owners.ToList();
        }

        public Owner getSpecificOwnerById(int id)
        {
            return _contexte.Owners.FirstOrDefault(owner => owner.id == id);
        }

        public void createOwner(Owner owner)
        {
            if(owner==null) throw new ArgumentException(nameof(owner));
            _contexte.Owners.Add(owner);
        }

        public void updateAOwner(Owner owner)
        {
            
        }

        public void deleteOwner(Owner owner)
        {
            if(owner==null) throw new ArgumentException(nameof(owner));
            _contexte.Owners.Remove(owner);
        }
    }
}
