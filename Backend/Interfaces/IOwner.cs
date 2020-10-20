using System.Collections.Generic;
using Backend.Models;

namespace Backend.Data
{
    public interface IOwner
    {
        bool SaveChange();
        IEnumerable<Owner> getOwnerList();
        Owner getSpecificOwnerById(int id);
        void createOwner(Owner owner);
        void updateAOwner(Owner owner);
        void deleteOwner(Owner owner);
    }
}