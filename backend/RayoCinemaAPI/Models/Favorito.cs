namespace RayoCinemaAPI.Models
{

    public class Favorito
    {
        public int Id { get; set; }
        public int UsuarioId { get; set; }
        public int PeliculaId { get; set; }
        public DateTime FechaAgregado { get; set; }

        public Usuario Usuario { get; set; }
    }
}
