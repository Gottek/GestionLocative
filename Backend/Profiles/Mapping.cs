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
            /*CreateMap<Owner, OwnerReadDtos>();
            CreateMap<OwnerCreateDtos, Owner>();
            CreateMap<OwnerUpdateDtos, Owner>();
            CreateMap<Owner,OwnerUpdateDtos>();
            CreateMap<Owner, OwnerReadDtos>();
            CreateMap<OwnerCreateDtos, Owner>();
            CreateMap<OwnerUpdateDtos, Owner>();
            CreateMap<Owner,OwnerUpdateDtos>();*/
            
        }
    }
}