﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Servicios.Interfaces;
using System.Text.Json;
using System.Text.Json.Serialization;
using Router.Hubs;
using Servicios;
using Entidades;
using TrucoApp.DTOs;

namespace Router.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TorneoController : ControllerBase
    {
        ITorneoServicio _torneoServicio;

        public TorneoController(ITorneoServicio torneoServicio)
        {
            _torneoServicio = torneoServicio;
        }

        [HttpGet]
        [Route("ObtenerTodosLosTorneos")]
        public IActionResult Get()
        {
            return Ok(_torneoServicio.ObtenerTorneosDisponibles());
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_torneoServicio.ObtenerTorneoPorId(id));
        }
        [HttpPost]
        [Route("CrearTorneo")]
        public ActionResult Post([FromBody] CrearTorneoDto crearTorneo)
        {
            try
            {
                var nuevoTorneo = new Torneo()
                {
                    Nombre = crearTorneo.Nombre,
                    CantidadParticipantes = crearTorneo.CantidadParticipantes
                };

                _torneoServicio.CrearTorneo(nuevoTorneo);
                return StatusCode(StatusCodes.Status200OK, nuevoTorneo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);

            }
        }

        [HttpPost]
        [Route("AgregarParticipante")]
        public IActionResult AgregarParticipante([FromBody] AgregarParticipanteDto agregarParticipante)
        {
            _torneoServicio.AgregarParticipante(agregarParticipante.IdTorneo, agregarParticipante.IdUsuario);
            return Ok();
        }
        [HttpGet]
        [Route("ProximaRonda/{id}")]
        public IActionResult ProximaRonda([FromRoute] int id)
        {
            return Ok(_torneoServicio.ProximaRonda(id));
        }
    }
}
