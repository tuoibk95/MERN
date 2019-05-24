import * as express from 'express';
import * as path from "path";
import * as bodyParser from "body-parser";
import "reflect-metadata";
import { createConnections } from 'typeorm'
import * as expressValidator from "express-validator";



createConnections().catch((e) => console.log(e)).then((e) => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.set("port", process.env.PORT || 3000);

    let engine = require('ejs-locals');
    app.engine('ejs', engine);
    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views');
    // Add headers
    app.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    });

    app.use(expressValidator());

    const userRoute = require('./routers/user/UserAccountRouter')

    const typeRoute = require('./routers/vehicle/TypeVehicleRouter')
    const brandRoute = require('./routers/vehicle/BrandVehicleRouter')
    const modelRoute = require('./routers/vehicle/ModelVehicleRouter')
    const transmissionRoute = require('./routers/vehicle/TransmissionRouter')
    const designRoute = require('./routers/vehicle/DesignVehicleRouter')
    const fuelRoute = require('./routers/vehicle/FuelVehicleRouter')
    const seatRoute = require('./routers/vehicle/SeatVehicleRouter')
    const vehicleRoute = require('./routers/vehicle/VehicleRouter')
    const option = require('./routers/vehicle/OptionVehicleRouter')
    const partnerRoute = require('./routers/partner/PartnerRouter')
    const vehiclePartnerRoute = require('./routers/partner/VehiclePartRouter')
    const bookingRoute =  require('./routers/booking/BookingRouter')
    const cityRoute = require('./routers/partner/CityRouter')

    const importRoute = require('./routers/import/ImportRouter');

    //user
    // app.use("/users", userRoute);
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });
    app.use("/", importRoute);

    app.use("/user", userRoute);

    //vehicle
    app.use("/vehicles/type", typeRoute);
    app.use("/vehicles/brand", brandRoute);
    app.use("/vehicles/model", modelRoute);
    app.use("/vehicles/transmission", transmissionRoute);
    app.use("/vehicles/design", designRoute);
    app.use("/vehicles/fuel", fuelRoute);
    app.use("/vehicles/seat", seatRoute);
    app.use("/vehicles", vehicleRoute);
    app.use("/option", option);

    //booking
    app.use("/booking", bookingRoute);
    
    //partner
    app.use("/partners", partnerRoute);
    app.use("/vehicle_partner", vehiclePartnerRoute)
    app.use("/partners/cities", cityRoute)


    app.listen(app.get("port"), () => {
        console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
        console.log("  Press CTRL-C to stop\n");
    });
}).catch((err) => console.log(err))
