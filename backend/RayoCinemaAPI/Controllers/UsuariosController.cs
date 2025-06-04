using Microsoft.AspNetCore.Mvc;
using RayoCinemaAPI.Data;
using RayoCinemaAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace RayoCinemaAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuariosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsuariosController(AppDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Autentica un usuario y devuelve sus datos si las credenciales son correctas.
        /// </summary>
        /// <param name="login">Objeto con correo y contraseña.</param>
        /// <returns>Usuario autenticado o error 401.</returns>
        [HttpPost("login")]
        [ProducesResponseType(typeof(Usuario), 200)]
        [ProducesResponseType(401)]
        public async Task<IActionResult> Login([FromBody] Usuario login)
        {
            var user = await _context.Usuarios.FirstOrDefaultAsync(u =>
                u.Correo == login.Correo && u.Contrasena == login.Contrasena);

            if (user == null)
                return Unauthorized("Usuario o contraseña incorrectos");

            return Ok(user);
        }

        /// <summary>
        /// Registra un nuevo usuario si el correo no existe previamente.
        /// </summary>
        /// <param name="nuevoUsuario">Datos del nuevo usuario.</param>
        /// <returns>Usuario creado o error 400 si el correo ya existe.</returns>
        [HttpPost("registro")]
        [ProducesResponseType(typeof(Usuario), 200)]
        [ProducesResponseType(400)]
        public async Task<IActionResult> Registro([FromBody] Usuario nuevoUsuario)
        {
            var existeCorreo = await _context.Usuarios.AnyAsync(u => u.Correo == nuevoUsuario.Correo);
            if (existeCorreo)
            {
                return BadRequest("El correo ya está registrado.");
            }

            _context.Usuarios.Add(nuevoUsuario);
            await _context.SaveChangesAsync();
            return Ok(nuevoUsuario);
        }
    }
}
