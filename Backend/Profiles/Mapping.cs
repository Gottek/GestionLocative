using AutoMapper;
using Backend.Dtos;
using Backend.Models;

namespace Backend.Profiles
{
    public class Mapping:Profile

    {
        public Mapping()
        {
            //demande un owner et renvoie un OwnerReadDtos
            CreateMap<Owner, OwnerReadDtos>();
            //demande un ownerCreateDtos et renvoie un Owner
            CreateMap<OwnerCreateDtos, Owner>();
            CreateMap<OwnerUpdateDtos, Owner>();
            CreateMap<Owner,OwnerUpdateDtos>();
            // ------------------------------------------------------------------
            CreateMap<Home,Home>(); // une sorte d'update plus stylé que les autres
            CreateMap<Owner,Owner>();
            CreateMap<Lease,Lease>();
        }
    }
}