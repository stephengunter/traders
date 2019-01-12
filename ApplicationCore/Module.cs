using Autofac;
using Module = Autofac.Module;
using Autofac.Core.Activators.Reflection;
using System;
using System.Reflection;
using System.Linq;
using ApplicationCore.Auth;
using ApplicationCore.Logging;

namespace ApplicationCore
{
	public class Modules : Module
	{
		protected override void Load(ContainerBuilder builder)
		{
			builder.RegisterType<JwtFactory>().As<IJwtFactory>().SingleInstance().FindConstructorsWith(new InternalConstructorFinder());
			builder.RegisterType<JwtTokenHandler>().As<IJwtTokenHandler>().SingleInstance().FindConstructorsWith(new InternalConstructorFinder());
			builder.RegisterType<TokenFactory>().As<ITokenFactory>().SingleInstance();
			builder.RegisterType<JwtTokenValidator>().As<IJwtTokenValidator>().SingleInstance().FindConstructorsWith(new InternalConstructorFinder());

			builder.RegisterType<Logger>().As<ILogger>().SingleInstance();
		}
	}

	public class InternalConstructorFinder : IConstructorFinder
	{
		public ConstructorInfo[] FindConstructors(Type targetType)
		{
			return targetType.GetTypeInfo().DeclaredConstructors.Where(c => !c.IsPrivate && !c.IsPublic).ToArray();
		}
	}
}
