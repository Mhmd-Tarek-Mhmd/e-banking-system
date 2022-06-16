# E=Banking System

Online Bank

You can check [the deployed app](https://ebankingsystem.herokuapp.com/)
or you can follow the below steps to run it locally

## Installation

1. Clone the repo
2. Make sure you have the necessary environments instlaled in your system;

- [.NET 6](https://dotnet.microsoft.com/en-us/download),
- [Postgres Database](https://www.postgresql.org/download/)

3. Register to [SendGrid](https://sendgrid.com/) mail service
4. Update `appsettings.json` with the following:
- in `SendGrid` section: your email, password and mail service key
- in `ConnectionString: Development` section: udate your database username and password
   
5. Run `dotnet tool install --global dotnet-ef` then `dotnet ef database update`
7. Run `cd ../backend`
   then run the application by\
   `dotnet run` or `dotnet watch run` for development purposes

## Contributing

Developed by Sprints Team 12
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
