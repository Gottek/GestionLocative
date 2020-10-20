using System;
using System.Collections.Generic;
using System.Linq;
using Backend.Models;

namespace Backend.Data
{
    public class LeaseRepository : ILease
    {
        private readonly CommanderContexte _contexte;

        public LeaseRepository(CommanderContexte contexte)
        {
            _contexte = contexte;
        }

        public bool SaveChange()
        {
            return _contexte.SaveChanges()>=0;
        }

        public IEnumerable<Lease> getLeaseList()
        {
            return _contexte.Leases.ToList();
        }

        public Lease getSpecificLeaseById(int id)
        {
            return _contexte.Leases.FirstOrDefault(lease => lease.id == id);
        }

        public void createLease(Lease lease)
        {
            if(lease==null) throw new ArgumentException(nameof(lease));
            _contexte.Leases.Add(lease);
        }

        public void updateALease(Lease lease)
        {
            
        }

        public void deleteLease(Lease lease)
        {
            if(lease==null) throw new ArgumentException(nameof(lease));
            _contexte.Leases.Remove(lease);
        }
    }
}