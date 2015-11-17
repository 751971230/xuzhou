using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(jsGaoji.Startup))]
namespace jsGaoji
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
