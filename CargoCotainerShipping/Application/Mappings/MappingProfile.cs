using Application.DTOs;
using AutoMapper;
using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Booking, BookingDetailsReq>()
            .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.User != null ? src.User.Name : string.Empty)) // Map UserName from User.Name
            .ForMember(dest => dest.ContainerType, opt => opt.MapFrom(src => src.Container != null ? src.Container.Type : string.Empty)) // Map ContainerType from Container.Type
            .ForMember(dest => dest.StartingFrom, opt => opt.MapFrom(src => src.SourcePort != null ? src.SourcePort.Name : string.Empty)) // Map StartingFrom from SourcePort.Name
            .ForMember(dest => dest.Destination, opt => opt.MapFrom(src => src.DestinationPort != null ? src.DestinationPort.Name : string.Empty)) // Map Destination from DestinationPort.Name
            .ForMember(dest => dest.StartingDate, opt => opt.MapFrom(src => DateOnly.FromDateTime(src.Created))) // Map StartingDate from Booking.Created (DateTime to DateOnly)
            .ForMember(dest => dest.DeliveryDate, opt => opt.MapFrom(src => src.DeliveryDate)); // DeliveryDate directly mapped
        }
    }
}
