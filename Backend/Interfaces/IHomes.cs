using System.Collections.Generic;
using Backend.Models;

namespace Backend.Data
{
    public interface IHomes
    {
        bool SaveChange();
        IEnumerable<Home> getHomeList();
        Home getSpecificHomeById(int id);
        void createHome(Home home);
        void updateAHome(Home home);
        void deleteHome(Home home);
    }
}