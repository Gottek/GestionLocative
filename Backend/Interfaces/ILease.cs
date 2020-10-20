using System.Collections.Generic;
using Backend.Models;

namespace Backend.Data
{
    public interface ILease
    {
        bool SaveChange();
        IEnumerable<Lease> getLeaseList();
        Lease getSpecificLeaseById(int id);
        void createLease(Lease lease);
        void updateALease(Lease lease);
        void deleteLease(Lease lease);
    }
}