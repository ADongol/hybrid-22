var daikin;
(function (daikin) {
    (function (calculator) {
        (function (buildingEnergy) {
            var DBESolution = (function () {
                function DBESolution(id, product) {
                    this.capcityPerUnit = 6000;
                    this._id = id;
                    this.product = product;
                }
                Object.defineProperty(DBESolution.prototype, "id", {
                    get: function () {
                        return this._id;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBESolution.prototype, "company", {
                    get: function () {
                        return this.product.company;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBESolution.prototype, "systemType", {
                    get: function () {
                        return this.product.systemType;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBESolution.prototype, "indoorModel", {
                    get: function () {
                        return this.product.indoorModel;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBESolution.prototype, "outdoorModel", {
                    get: function () {
                        return this.product.outdoorModel;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBESolution.prototype, "capacity", {
                    get: function () {
                        return this.product.capacity;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBESolution.prototype, "seer", {
                    get: function () {
                        return this.product.seer;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBESolution.prototype, "hspf", {
                    get: function () {
                        return this.product.hspf;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBESolution.prototype, "combModel", {
                    get: function () {
                        return this.product.indoorModel + "-" + this.product.outdoorModel;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBESolution.prototype, "unitCount", {
                    get: function () {
                        return this.product.capacity / this.capcityPerUnit;
                    },
                    enumerable: true,
                    configurable: true
                });
                return DBESolution;
            })();
            buildingEnergy.DBESolution = DBESolution;

            var DBECalculator = (function () {
                function DBECalculator(currencySymbol) {
                    if (typeof currencySymbol === "undefined") { currencySymbol = "$"; }
                    this.currencySymbol = "";
                    this.decimalSeparator = "";
                    // data.buildingLocations[n].id
                    this.buildingLocationID = 1;
                    // data.buildingCapacity[n].id
                    this.buildingCapacityID = 1;
                    // data.buildingAge[n].id
                    this.buildingAgeID = 1;
                    // data.buildingHVACInstalled[n].id
                    this.buildingHVACInstalledID = 1;
                    // data.existingCooling[n].id
                    this.existingCoolingID = 1;
                    // data.existingHeating[n].id
                    this.existingHeatingID = 1;
                    // data.replacementCooling[n].id
                    this.replacementCoolingID = 1;
                    // data.replacementHeating[n].id
                    this.replacementHeatingID = 1;
                    // Assumptions!$Q$3 - 1=yes, 2=No
                    this.existingProgrammableThermostat = false;
                    // Assumptions!$Q$4 - 1=yes, 2=No
                    this.replacementProgrammableThermostat = false;
                    this.manuallySelectedSolutionID = 2;
                    this.inverterTechnology = false;
                    // not in data yet
                    this.ratesElectricity = 11.5;
                    this.ratesGas = 108;
                    this.ratesOil = 300;
                    // 'Comparison Summary'!C6:D6
                    // Titled Untility Increase Rate, but same value also linked called
                    // 'ASHP Data'!$C$25 = Commercial and Residential Discount Rate
                    this.discountRate = 0;
                    this.currencySymbol = currencySymbol;
                    this.decimalSeparator = Number("1.2").toLocaleString().substr(1, 1); // safe, see toCurrency
                    this.solutions = new Array();
                }
                // based on a stack overflow with about a zillion other ways this one seemed elagaent and thought of eveything
                DBECalculator.prototype.toCurrency = function (amount) {
                    var amountWithCommas = amount.toLocaleString();
                    var arParts = String(amountWithCommas).split(this.decimalSeparator);
                    var intPart = arParts[0];
                    var decPart = (arParts.length > 1 ? arParts[1] : '');
                    decPart = (decPart + '00').substr(0, 2);
                    return this.currencySymbol + intPart + this.decimalSeparator + decPart;
                };

                // excels PV function PV(rate,nper,pmt,fv,type)
                DBECalculator.PV = function (rate, nper, pmt, fv, type) {
                    if (typeof fv === "undefined") { fv = 0; }
                    if (typeof type === "undefined") { type = 0; }
                    if (rate == 0)
                        return -fv - (pmt * nper);
                    var num = type == 1 ? 1 : 1 + rate;
                    var x = 1 + rate;
                    var num2 = Math.pow(x, nper);
                    return -(fv + ((pmt * num) * ((num2 - 1) / rate))) / num2;
                };

                Object.defineProperty(DBECalculator.prototype, "buildingLocation", {
                    // locations A4 id, B4 Region, C4 usage, D4 cooling, E4 heating, F4 regionalLoad, G4 datasorce, H4 inverter
                    get: function () {
                        return this.getDataById("buildingLocations", this.buildingLocationID);
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "buildingCapacity", {
                    // Assumptions B22 id, C22 floorSpace, E22 coolingCapacity
                    get: function () {
                        return this.getDataById("buildingCapacity", this.buildingCapacityID);
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "buildingHVACInstalled", {
                    // Assumptions J22 id, K22 age, L22 seer, M22 hspf
                    get: function () {
                        return this.getDataById("buildingHVACInstalled", this.buildingHVACInstalledID);
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "existingCooling", {
                    // Assumtions B14 id, D14 seer
                    get: function () {
                        return this.getDataById("existingCooling", this.existingCoolingID);
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "existingHeating", {
                    // Assumtions B6
                    get: function () {
                        return this.getDataById("existingHeating", this.existingHeatingID);
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "replacementCooling", {
                    // Assumtions
                    get: function () {
                        return this.getDataById("replacementCooling", this.replacementCoolingID);
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "replacementHeating", {
                    // Assumtions I6
                    get: function () {
                        return this.getDataById("replacementHeating", this.replacementHeatingID);
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "installedCapacity", {
                    // building J10
                    get: function () {
                        return this.buildingCapacity.coolingCapacity / 12000;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "existingCoolingEfficiency", {
                    // System Selection'!G10
                    get: function () {
                        // system seletion
                        // =Assumptions!L22*Assumptions!D14
                        return this.buildingHVACInstalled.seer * this.existingCooling.seer;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "existingHeatingEfficiency", {
                    // System Selection'!G14
                    get: function () {
                        switch (this.existingHeating.id) {
                            case 3:
                                return this.buildingHVACInstalled.hspf * this.existingCooling.seer;
                            case 1:
                                return this.buildingHVACInstalled.gasFurnaceEfficiency;
                            default:
                                return this.buildingHVACInstalled.oilFurnaceEfficiency;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "replacementCoolingEfficiency", {
                    // System Selection'!O10
                    get: function () {
                        // ='ASHP Data'!C8*Assumptions!K14
                        return this.ASHPdata.energyStarQualifiedUnit.seer * this.replacementCooling.seer;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "replacementHeatingEfficiency", {
                    get: function () {
                        var replacementHeating = this.getDataById("replacementHeating", this.replacementHeatingID);
                        return replacementHeating ? replacementHeating.efficiency : 0;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "daikinSystemCapacity", {
                    get: function () {
                        var selectedCityHeatLoadbyConstructionAge = 16.50;

                        // 43805 = ='Oil-Gas Data'!D27*Assumptions!C22*1000/Locations!E4
                        var capacity = selectedCityHeatLoadbyConstructionAge * this.buildingCapacity.coolingCapacity * 1000 / this.buildingLocation.heating;
                        if (this.installedCapacity * 12000 > capacity) {
                            return this.installedCapacity * 12000;
                        }
                        return capacity;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "estimatedHeatPumpCapacity", {
                    // Building!H16
                    get: function () {
                        // = Assumptions!E22*'Oil-Gas Data'!S30
                        var buildingCapacity = this.getDataById("buildingCapacity", this.buildingCapacityID);
                        var buildingAge = this.getDataById("buildingAge", this.buildingAgeID);
                        var heatLoads = this.getData("heatLoads");
                        var region = this.buildingLocation.region;
                        var presentHeatLoad = heatLoads[8][region];
                        var heatLoad = heatLoads[this.buildingAgeID][region];
                        return buildingCapacity.coolingCapacity * (heatLoad / presentHeatLoad);
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "estimatedHeatingCapacity", {
                    //='Oil-Gas'!H37*1000
                    get: function () {
                        var buildingLocation = this.getDataById("buildingLocations", this.buildingLocationID);
                        var heatLoads = this.getData("heatLoads");
                        var heatLoad = heatLoads[this.buildingAgeID][buildingLocation.region];
                        return buildingLocation.regionalLoad * heatLoad * 1000;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "oilGasData", {
                    get: function () {
                        return this.getData("oilGasData");
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "ASHPdata", {
                    get: function () {
                        return this.getData("ASHPdata");
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "heatLoadByConstructionAge", {
                    // oil gas data D27
                    get: function () {
                        // =Locations!F4*'Oil-Gas Data'!R30
                        // Locations!F4 = this.buildingLocation.regionalLoad
                        // R30 = heatLoad
                        var heatLoads = this.getData("heatLoads");
                        var heatLoad = heatLoads[this.buildingAgeID][this.buildingLocation.region];
                        return this.buildingLocation.regionalLoad * heatLoad;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "replacementHeatingSeasonalPerformanceFactor", {
                    // ASHP D21
                    get: function () {
                        // =IF(Assumptions!I6=3,'System Selection'!O14*0.293,'ASHP Data'!C7*Assumptions!D14*0.293)
                        // I6 = this.existingHeating.id
                        // 'ASHP Data'!C7 = this.ASHPData.energyStarQualifiedUnit.hspf
                        // Assumptions!D14 = this.existingCooling.seer
                        if (this.replacementHeating.id == 3) {
                            return this.replacementHeatingEfficiency * 0.293;
                        }
                        return this.ASHPdata.energyStarQualifiedUnit.hspf * this.existingCooling.seer * 0.293;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "heatingSeasonalPerformanceFactor", {
                    // ASHP H21
                    get: function () {
                        // IF(Assumptions!B6=3,'System Selection'!G14*0.293,'ASHP Data'!C14*Assumptions!D14*0.293)
                        // B6 = this.existingHeating.id
                        // ASHP Data'!C14 = this.ASHPData.conventionalUnit.hspf
                        // Assumptions!D14 = this.existingCooling.seer
                        if (this.existingHeating.id == 3) {
                            return this.existingHeatingEfficiency * 0.293;
                        }
                        return this.ASHPdata.conventionalUnit.hspf * this.existingCooling.seer * 0.293;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "replacementCoolingEnergyCost", {
                    // ASHP D32
                    get: function () {
                        // =D14*H33
                        // D14 = this.ratesElectricity / 100
                        return this.ratesElectricity / 100 * this.replacementCoolingEnergyConsumption;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "coolingEnergyCost", {
                    // ASHP H32
                    get: function () {
                        // =D14*H33
                        // D14 = this.ratesElectricity / 100
                        return this.ratesElectricity / 100 * this.coolingEnergyConsumption;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "replacementCoolingEnergyConsumption", {
                    // ASHP D33
                    get: function () {
                        // =IF(Assumptions!Q3=1,(1-'ASHP Data'!C25)*ASHP!D13*ASHP!D23/1000*(Locations!D4/ASHP!D22),ASHP!D13*ASHP!D23/1000*(Locations!D4/ASHP!D22))
                        // Assumptions!Q3 = this.existingProgrammableThermostat
                        // 'ASHP Data'!C25 = ='Comparison Summary'!C6:D6 = this.commercialAndResidentialDiscountRate
                        // ASHP!D23 = Building!H16 = this.estimatedHeatPumpCapacity
                        // ASHP!D22 = '='System Selection'!O10 = this.replacementCoolingEfficiency
                        // Locations!D4 = this.buildingLocation.cooling
                        var numberOfUnits = 1;
                        if (this.existingProgrammableThermostat) {
                            return (1 - this.discountRate) * numberOfUnits * this.estimatedHeatPumpCapacity / 1000 * (this.buildingLocation.cooling / this.replacementCoolingEfficiency);
                        } else {
                            return numberOfUnits * this.estimatedHeatPumpCapacity / 1000 * (this.buildingLocation.cooling / this.replacementCoolingEfficiency);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "coolingEnergyConsumption", {
                    // ASHP H33
                    get: function () {
                        // =IF(Assumptions!Q3=1,(1-'ASHP Data'!C25)*ASHP!D13*ASHP!H23/1000*(Locations!D4/ASHP!H22),ASHP!D13*ASHP!H23/1000*(Locations!D4/ASHP!H22))
                        // Assumptions!Q3 = this.existingProgrammableThermostat
                        // 'ASHP Data'!C25 = ='Comparison Summary'!C6:D6 = this.commercialAndResidentialDiscountRate
                        // ASHP!H23 = Building!H16 = this.estimatedHeatPumpCapacity
                        // ASHP!H22 = 'System Selection'!G10 = this.existingCoolingEfficiency
                        // Locations!D4 = this.buildingLocation.cooling
                        var numberOfUnits = 1;
                        if (this.existingProgrammableThermostat) {
                            return (1 - this.discountRate) * numberOfUnits * this.estimatedHeatPumpCapacity / 1000 * (this.buildingLocation.cooling / this.existingCoolingEfficiency);
                        } else {
                            return numberOfUnits * this.estimatedHeatPumpCapacity / 1000 * (this.buildingLocation.cooling / this.existingCoolingEfficiency);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "replacementHeatingEnergyConsumption", {
                    // ASHP D35
                    get: function () {
                        //=Assumptions!C22*'Oil-Gas Data'!D27/(D21)/1000*IF(D24=1,(1-'Oil-Gas Data'!D30),1)*1000000/'Oil-Gas Data'!D38
                        // D21 = this.replacementHeatingSeasonalPerformanceFactor
                        // Assumptions!C22 = this.buildingCapacity.floorSpace
                        // Oil-Gas Data'!D27 = this.heatLoadByConstructionAge
                        return this.buildingCapacity.floorSpace * this.heatLoadByConstructionAge / this.replacementHeatingSeasonalPerformanceFactor / 1000 * (this.replacementProgrammableThermostat ? 1 - this.oilGasData.programmableThermostatSavings.avgHeatingSaving : 1) * 1000000 / this.oilGasData.energyConversions.elecBtuPer;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "replacementHeatingEnergyCost", {
                    // ASHP D35
                    get: function () {
                        // =IF(Assumptions!I6=3,D14*D35,0)
                        // D14 = this.ratesElectricity / 100
                        return this.replacementHeatingID == 3 ? this.ratesElectricity / 100 * this.replacementHeatingEnergyConsumption : 0;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "heatingEnergyCost", {
                    // ASHP H35
                    get: function () {
                        // =IF(Assumptions!B6 = 3, D14 * H35, 0)
                        // D14 = this.ratesElectricity / 100
                        return this.existingHeatingID == 3 ? this.ratesElectricity / 100 * this.heatingEnergyConsumption : 0;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "heatingEnergyConsumption", {
                    // ASHP H35
                    get: function () {
                        // = Assumptions!C22*'Oil-Gas Data'!D27/(H21)/1000*IF(H24=1,(1-'Oil-Gas Data'!D30),1)*1000000/'Oil-Gas Data'!D38
                        // H21 = this.heatingSeasonalPerformanceFactor
                        // Assumptions!C22 = this.buildingCapacity.floorSpace
                        // Oil-Gas Data'!D27 = this.heatLoadByConstructionAge
                        return this.buildingCapacity.floorSpace * this.heatLoadByConstructionAge / this.heatingSeasonalPerformanceFactor / 1000 * (this.existingProgrammableThermostat ? 1 - this.oilGasData.programmableThermostatSavings.avgHeatingSaving : 1) * 1000000 / this.oilGasData.energyConversions.elecBtuPer;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "replacementHSPF77", {
                    // ASHP D37
                    get: function () {
                        // = D14*H35
                        // D14 = this.ratesElectricity / 100
                        // D35 = this.replacementHeatingEnergyConsumption
                        return this.ratesElectricity / 100 * this.replacementHeatingEnergyConsumption;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "HSPF77", {
                    // ASHP H37
                    get: function () {
                        // = D14*H35*Assumptions!M22/7.7
                        // D14 = this.ratesElectricity / 100
                        // H35 = this.heatingEnergyConsumption
                        // Assumptions!M22 = this.buildingHVACInstalled.hspf
                        return this.ratesElectricity / 100 * this.heatingEnergyConsumption * this.buildingHVACInstalled.hspf / 7.7;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "manuallySelectedSolution", {
                    get: function () {
                        for (var i = 0, length = this.solutions.length; i < length; i++) {
                            if (this.solutions[i].id == this.manuallySelectedSolutionID) {
                                return this.solutions[i];
                            }
                        }
                        return null;
                    },
                    enumerable: true,
                    configurable: true
                });

                DBECalculator.prototype.energyCost = function (solutionId) {
                    // working back from manuualy selected soluion currentyl
                    var solution = this.getDataById("solutions", solutionId);

                    // assumptions
                    // =IF($O$15=2,V41+V46,(V41+V46)/Locations!$H$4)
                    // V41 = ASHP!H32*ASHP!H22/G59/Assumptions!D14
                    // ASHP!H32 = this.coolingEnergyCost
                    // ASHP!H22 = 'System Selection'!G10 = this.existingCoolingEfficiency
                    // G59 = solution.seer
                    // D14 = existingCooling.seer
                    // V46 = ASHP!H37*7.7/H59/Assumptions!D14
                    // H37 = this.HSPF77
                    // H59 = solution.hspf;
                    // Assumptions!D14 = this.existingCooling.seer
                    console.log("solution=" + solution.combModel);
                    console.log("heatLoadByConstructionAge: " + this.heatLoadByConstructionAge);
                    console.log(JSON.stringify(this.ashp, null, 2));

                    var cost;
                    cost = this.coolingEnergyCost * this.existingCoolingEfficiency / solution.seer / this.existingCooling.seer; // V41
                    cost += this.HSPF77 * 7.7 / solution.hspf / this.existingCooling.seer; // v46
                    if (!this.inverterTechnology) {
                        return cost;
                    }
                    return cost / this.buildingLocation.inverter;
                };

                DBECalculator.prototype.buildSolution = function () {
                    // this is close as possible port of vbscript macro, could be coded more elegantly but am keeping true to form so can work out whats going on.
                    this.solutions = new Array();
                    var sno = 1;

                    // populate Inverter Ducted Models
                    var products = this.data.products;
                    var daikinSystemCapacity = this.daikinSystemCapacity;

                    console.log("Building solution ");

                    for (var i = 0, length = products.length; i < length; i++) {
                        var product = products[i];
                        if (product.company == "Daikin" && product.systemType == "Heat Pump" && (daikinSystemCapacity / product.capacity) >= 0.8) {
                            this.solutions.push(new DBESolution(sno++, product));
                        }
                    }

                    // Populate Mini-Split Models
                    products = this.data.productsDaikin;
                    for (var i = 0, length = products.length; i < length; i++) {
                        var product = products[i];
                        if (product.company == "Daikin" && product.systemType == "Mini - Split" && (daikinSystemCapacity / product.capacity) >= 0.6) {
                            this.solutions.push(new DBESolution(sno++, product));
                        }
                    }

                    // Populate Heat Pump Models
                    products = this.data.productsDaikin;
                    for (var i = 0, length = products.length; i < length; i++) {
                        var product = products[i];
                        if (product.company == "Daikin" && product.systemType == "Heat Pump" && (daikinSystemCapacity / product.capacity) >= 0.8) {
                            this.solutions.push(new DBESolution(sno++, product));
                        }
                    }
                };

                Object.defineProperty(DBECalculator.prototype, "unitCounts", {
                    get: function () {
                        var systems = this.getData("systemSelection");
                        return {
                            "manuallySelected": this.manuallySelectedSolution.unitCount,
                            "minimumBaseLine": systems.minimumBaseLine.unitCount,
                            "newSystem": systems.newSystem.unitCount,
                            "daikinInverterDucted": systems.daikinInverterDucted.unitCount,
                            "daikinMultiSplit": systems.daikinMultiSplit.unitCount,
                            "daikinAltherma": systems.daikinAltherma.unitCount
                        };
                    },
                    enumerable: true,
                    configurable: true
                });

                DBECalculator.prototype.getData = function (dataSet) {
                    var data = this.data[dataSet];
                    if (data == null) {
                        throw ("DBECalculator ** getData " + dataSet + " not found");
                    }
                    return data;
                };

                DBECalculator.prototype.getDataById = function (dataSet, id) {
                    var a = this.data[dataSet];
                    if (a == null) {
                        throw ("DBECalculator ** getDataById data set " + dataSet + " not found");
                    }
                    for (var i = 0; i < a.length; i++) {
                        if (a[i].id == id)
                            return a[i];
                    }
                    throw ("DBECalculator ** getDataById Id " + id + " not found on data set " + dataSet);
                };

                DBECalculator.prototype.setDataById = function (dataSet, id, name, value) {
                    var a = this.data[dataSet];
                    if (a == null) {
                        throw ("DBECalculator ** setDataById data set " + dataSet + " not found");
                    }
                    for (var i = 0; i < a.length; i++) {
                        if (a[i].id == id) {
                            a[i][name] = value;
                            return a[i];
                        }
                    }
                    throw ("DBECalculator ** setDataById Id " + id + " not found on data set " + dataSet);
                };

                DBECalculator.prototype.parseData = function (json) {
                    this.data = JSON.parse(json);
                    if (this.data == null)
                        return false;

                    // populate install costs
                    var systems = this.getData("systemSelection");
                    this.installCosts = {
                        "manuallySelected": systems.manuallySelected.installCost,
                        "minimumBaseLine": systems.minimumBaseLine.installCost,
                        "newSystem": systems.newSystem.installCost,
                        "daikinInverterDucted": systems.daikinInverterDucted.installCost,
                        "daikinMultiSplit": systems.daikinMultiSplit.installCost,
                        "daikinAltherma": systems.daikinAltherma.installCost
                    };

                    this.buildSolution(); // should be safe, if not make it so
                    return true;
                };

                DBECalculator.readValue = function (val, def) {
                    if (typeof val === "undefined")
                        return def;
                    if (val == null)
                        return def;
                    return val;
                };

                Object.defineProperty(DBECalculator.prototype, "state", {
                    get: function () {
                        return {
                            "buildingCapacityID": this.buildingCapacityID,
                            "buildingLocationID": this.buildingLocationID,
                            "buildingAgeID": this.buildingAgeID,
                            "buildingHVACInstalledID": this.buildingHVACInstalledID,
                            "existingCoolingID": this.existingCoolingID,
                            "existingHeatingID": this.existingHeatingID,
                            "existingProgrammableThermostat": this.existingProgrammableThermostat,
                            "replacementCoolingID": this.replacementCoolingID,
                            "replacementHeatingID": this.replacementHeatingID,
                            "replacementProgrammableThermostat": this.replacementProgrammableThermostat,
                            "inverterTechnology": this.inverterTechnology
                        };
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "ashp", {
                    // added for debuging calculations.
                    get: function () {
                        return {
                            "replacement": {
                                "heatingSeasonalPerformanceFactor": this.replacementHeatingSeasonalPerformanceFactor,
                                "coolingEnergyConsumption": this.replacementCoolingEnergyConsumption,
                                "heatingEnergyCost": this.replacementHeatingEnergyCost,
                                "heatingEnergyConsumption": this.replacementHeatingEnergyConsumption,
                                "HSPF77=": this.replacementHSPF77
                            },
                            "existing": {
                                "heatingSeasonalPerformanceFactor": this.heatingSeasonalPerformanceFactor,
                                "coolingEnergyCost": this.coolingEnergyCost,
                                "coolingEnergyConsumption": this.coolingEnergyConsumption,
                                "heatingEnergyCost": this.heatingEnergyCost,
                                "heatingEnergyConsumption": this.heatingEnergyConsumption,
                                "HSPF77=": this.HSPF77
                            }
                        };
                    },
                    enumerable: true,
                    configurable: true
                });

                DBECalculator.prototype.calcEnergyCost = function (seer, hspf) {
                    // assumptions
                    // =IF($O$15=2,V41+V46,(V41+V46)/Locations!$H$4)
                    // V41 = ASHP!H32*ASHP!H22/G59/Assumptions!D14
                    // ASHP!H32 = this.coolingEnergyCost
                    // ASHP!H22 = 'System Selection'!G10 = this.existingCoolingEfficiency
                    // G59 = solution.seer
                    // D14 = existingCooling.seer
                    // V46 = ASHP!H37*7.7/H59/Assumptions!D14
                    // H37 = this.HSPF77
                    // H59 = solution.hspf;
                    // Assumptions!D14 = this.existingCooling.seer
                    var cost;
                    cost = this.coolingEnergyCost * this.existingCoolingEfficiency / seer / this.existingCooling.seer; // V41
                    cost += this.HSPF77 * 7.7 / hspf / this.existingCooling.seer; // v46
                    if (!this.inverterTechnology) {
                        return cost;
                    }
                    return cost / this.buildingLocation.inverter;
                };

                Object.defineProperty(DBECalculator.prototype, "energyCostExisting", {
                    // Conventional Cooling
                    get: function () {
                        // Assumptions = N43+N38
                        // N43 = ASHP!H34/K14+'Oil-Gas'!H36
                        // N38 = ASHP!H32
                        var cost = this.heatingEnergyCost / this.replacementCooling.seer + 0;
                        return cost + this.coolingEnergyCost;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "energyCost13SEERCooling", {
                    get: function () {
                        // Assumptions =N44+N39
                        // N44 = ASHP!H37/K14
                        // N39 = ASHP!H32*ASHP!H22/13/Assumptions!D14
                        // ASHP!H32 = this.coolingEnergyCost
                        // ASHP!H22 = this.existingCoolingEfficiency
                        var cost = this.HSPF77 / this.replacementCooling.seer;
                        cost += this.coolingEnergyCost * this.existingCoolingEfficiency / 13 / this.existingCooling.seer;
                        return cost;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "energyCostReplacement", {
                    // new coooling system
                    get: function () {
                        // Assumptions = N45+N40
                        // N45 = ASHP!D34/K14+'Oil-Gas'!D36
                        // ASHP!D34 = this.replacementHeatingEnergyCost
                        // K14 = this.replacementCooling.seer
                        // 'Oil-Gas'!D36 = FUCK sink hole again TODO
                        // N40 = ASHP!D32 = this.replacementCoolingEnergyCost
                        var cost = this.replacementHeatingEnergyCost / this.replacementCooling.seer + 0;
                        return cost + this.replacementCoolingEnergyCost;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "annualEnergyCost", {
                    get: function () {
                        var existing = this.energyCostExisting;
                        var baseline = this.energyCost13SEERCooling;
                        var newSystem = this.energyCostReplacement;

                        // TODO unknow base line selection criteria, ends empty cell in sheet, always uses existing
                        return {
                            "minimumBaseLine": true ? existing : baseline,
                            "newSystem": newSystem,
                            "daikinInverterDucted": this.calcEnergyCost(18, 9.5),
                            "daikinMultiSplit": this.calcEnergyCost(17.2, 9.3),
                            "daikinAltherma": this.calcEnergyCost(13, 11),
                            "manuallySelected": this.calcEnergyCost(this.manuallySelectedSolution.seer, this.manuallySelectedSolution.hspf)
                        };
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "annualEnergyCostSavings", {
                    // Results I11 - I15
                    get: function () {
                        var annualEnergyCost = this.annualEnergyCost;
                        var existingCost = this.energyCostExisting;
                        return {
                            "newSystem": existingCost - annualEnergyCost.newSystem,
                            "daikinInverterDucted": existingCost - annualEnergyCost.daikinInverterDucted,
                            "daikinMultiSplit": existingCost - annualEnergyCost.daikinMultiSplit,
                            "daikinAltherma": existingCost - annualEnergyCost.daikinAltherma,
                            "manuallySelected": existingCost - annualEnergyCost.manuallySelected
                        };
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "costSavingsOver15Years", {
                    get: function () {
                        var annualSavings = this.annualEnergyCostSavings;
                        var period = [1, 2, 4, 10, 15];
                        var savings = new Array();
                        for (var i = 0; i < period.length; i++) {
                            savings.push({
                                "newSystem": annualSavings.newSystem * period[i],
                                "daikinInverterDucted": annualSavings.daikinInverterDucted * period[i],
                                "daikinMultiSplit": annualSavings.daikinMultiSplit * period[i],
                                "daikinAltherma": annualSavings.daikinAltherma * period[i],
                                "manuallySelected": annualSavings.manuallySelected * period[i]
                            });
                        }
                        return savings;
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "lifeCycleCostSavings", {
                    // Results 011 - 015
                    get: function () {
                        var annualEnergyCost = this.annualEnergyCost;

                        // new system
                        // Results = $N$9-N11
                        // N11 = PV('ASHP Data'!$C$25, 'ASHP Data'!$C$17, -Results!G11, , 0)
                        // 'ASHP Data'!$C$25 = this.discountRate
                        // 'ASHP Data'!$C$17 = this.ASHPdata.conventionalUnit.lifetime
                        var per = this.ASHPdata.conventionalUnit.lifetime;
                        var existingPV = DBECalculator.PV(this.discountRate, per, -this.energyCostExisting);
                        return {
                            "newSystem": existingPV - DBECalculator.PV(this.discountRate, per, -annualEnergyCost.newSystem),
                            "daikinInverterDucted": existingPV - DBECalculator.PV(this.discountRate, per, -annualEnergyCost.daikinInverterDucted),
                            "daikinMultiSplit": existingPV - DBECalculator.PV(this.discountRate, per, -annualEnergyCost.daikinMultiSplit),
                            "daikinAltherma": existingPV - DBECalculator.PV(this.discountRate, per, -annualEnergyCost.daikinAltherma),
                            "manuallySelected": existingPV - DBECalculator.PV(this.discountRate, per, -annualEnergyCost.manuallySelected)
                        };
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "initialCostDifferenceOverMinimumBaseline", {
                    // Results M11 - M15
                    get: function () {
                        return {
                            "newSystem": this.installCosts.newSystem - this.installCosts.minimumBaseLine,
                            "daikinInverterDucted": this.installCosts.daikinInverterDucted - this.installCosts.minimumBaseLine,
                            "daikinMultiSplit": this.installCosts.daikinMultiSplit - this.installCosts.minimumBaseLine,
                            "daikinAltherma": this.installCosts.daikinAltherma - this.installCosts.minimumBaseLine,
                            "manuallySelected": this.installCosts.manuallySelected - this.installCosts.minimumBaseLine
                        };
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "netLifeCycleCostSavings", {
                    // Results P11 - P15
                    get: function () {
                        var costSavings = this.lifeCycleCostSavings;
                        return {
                            "newSystem": costSavings.newSystem + this.installCosts.newSystem,
                            "daikinInverterDucted": costSavings.daikinInverterDucted + this.installCosts.daikinInverterDucted,
                            "daikinMultiSplit": costSavings.daikinMultiSplit + this.installCosts.daikinMultiSplit,
                            "daikinAltherma": costSavings.daikinAltherma + this.installCosts.daikinAltherma,
                            "manuallySelected": costSavings.manuallySelected + this.installCosts.manuallySelected
                        };
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(DBECalculator.prototype, "payBackPeriod", {
                    // Results Q11 - Q15
                    get: function () {
                        // =IF(M11<=0,0,IF(I11<0, "N/A", IF(I11=0,">"&'ASHP Data'!$C$10&"", M11/I11)))
                        // M11 = initialCostDifferenceOverMinimumBaseline
                        // I11 = annualEnergyCostSavings
                        // ASHP Data'!$C$10 = ASHPdata.energyStarQualifiedUnit.lifetime
                        var cd = this.initialCostDifferenceOverMinimumBaseline;
                        var cs = this.annualEnergyCostSavings;
                        var lifetime = this.ASHPdata.energyStarQualifiedUnit.lifetime;
                        return {
                            "newSystem": cd.newSystem <= 0 ? cs.newSystem < 0 ? NaN : lifetime : cd.newSystem / cs.newSystem,
                            "daikinInverterDucted": cd.daikinInverterDucted <= 0 ? cs.daikinInverterDucted < 0 ? NaN : lifetime : cd.daikinInverterDucted / cs.daikinInverterDucted,
                            "daikinMultiSplit": cd.daikinMultiSplit <= 0 ? cs.daikinMultiSplit < 0 ? NaN : lifetime : cd.daikinMultiSplit / cs.daikinMultiSplit,
                            "daikinAltherma": cd.daikinAltherma <= 0 ? cs.daikinAltherma < 0 ? NaN : lifetime : cd.daikinAltherma / cs.daikinAltherma,
                            "manuallySelected": cd.manuallySelected <= 0 ? cs.manuallySelected < 0 ? NaN : lifetime : cd.manuallySelected / cs.manuallySelected
                        };
                    },
                    enumerable: true,
                    configurable: true
                });

                // Results  R10 - R15
                DBECalculator.prototype.lifeCycleEnergyConsumed = function () {
                    // new system
                    // =Assumptions!Q51*'ASHP Data'!C10
                    // Assumptions!Q51 = Q40+Q45
                    // Q40 = ASHP!D33 = this.replacementCoolingEnergyConsumption
                    // Q45 = ASHP!D35+IF('Oil-Gas'!H36=0, 0,'Oil-Gas'!D38)
                    // ASHP!D35  = this.heatingEnergyConsumption
                    // daikinInverterDucted
                    // =Assumptions!Z49*'ASHP Data'!C10
                    // Assumptions!Z49 = Z38+Z43
                    // Z38 =
                    return {
                        "newSystem": this.replacementCoolingEnergyConsumption + this.heatingEnergyConsumption + 0,
                        "daikinInverterDucted": 0,
                        "daikinMultiSplit": 0,
                        "daikinAltherma": 0,
                        "manuallySelected": 0
                    };
                };

                // Results  S10 - S15
                DBECalculator.prototype.lifeCycleEnergySaved = function () {
                    // = $R$9-R10
                    return {
                        "newSystem": 0,
                        "daikinInverterDucted": 0,
                        "daikinMultiSplit": 0,
                        "daikinAltherma": 0,
                        "manuallySelected": 0
                    };
                };

                // Results  T10 - T15
                DBECalculator.prototype.lifeCycleAirPullutionReduction = function () {
                    // =S10*'ASHP Data'!$C$33
                    return {
                        "newSystem": 0,
                        "daikinInverterDucted": 0,
                        "daikinMultiSplit": 0,
                        "daikinAltherma": 0,
                        "manuallySelected": 0
                    };
                };

                // Results U10 - U15
                DBECalculator.prototype.equivalentSavingsCarsRemovedFromRoads = function () {
                    // =T10/'ASHP Data'!$C$37
                    return {
                        "newSystem": 0,
                        "daikinInverterDucted": 0,
                        "daikinMultiSplit": 0,
                        "daikinAltherma": 0,
                        "manuallySelected": 0
                    };
                };

                // Results V10 - C15
                DBECalculator.prototype.equivalentSavingsForest = function () {
                    // = =Results!T10/'ASHP Data'!$C$36
                    return {
                        "newSystem": 0,
                        "daikinInverterDucted": 0,
                        "daikinMultiSplit": 0,
                        "daikinAltherma": 0,
                        "manuallySelected": 0
                    };
                };

                DBECalculator.writeCookie = function (name, value, days) {
                    if (typeof days === "undefined") { days = 1; }
                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    var cookie = name + '=' + JSON.stringify(value) + '; expires=' + date.toUTCString();
                    ;
                    document.cookie = cookie;
                    console.log(cookie);
                };

                DBECalculator.readCookie = function (name) {
                    var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
                    result && (result = JSON.parse(result[1]));
                    return result;
                };

                DBECalculator.prototype.saveState = function () {
                    DBECalculator.writeCookie("DBECalculatorState", this.state);
                };

                DBECalculator.prototype.loadState = function () {
                    var state = DBECalculator.readValue(DBECalculator.readCookie("DBECalculatorState"), {});
                    this.buildingCapacityID = DBECalculator.readValue(state.buildingCapacityID, 1);
                    this.buildingLocationID = DBECalculator.readValue(state.buildingLocationID, 8); // AL-Mobile, some have cooling 0
                    this.buildingAgeID = DBECalculator.readValue(state.buildingAgeID, 8); // 2000 - present
                    this.buildingHVACInstalledID = DBECalculator.readValue(state.buildingHVACInstalledID, 1);
                    this.existingCoolingID = DBECalculator.readValue(state.existingCoolingID, 3);
                    this.existingHeatingID = DBECalculator.readValue(state.existingHeatingID, 1);
                    this.existingProgrammableThermostat = DBECalculator.readValue(state.existingProgrammableThermostat, false);
                    this.replacementCoolingID = DBECalculator.readValue(state.replacementCoolingID, 1);
                    this.replacementHeatingID = DBECalculator.readValue(state.replacementHeatingID, 3);
                    this.replacementProgrammableThermostat = DBECalculator.readValue(state.replacementProgrammableThermostat, false);
                    this.inverterTechnology = DBECalculator.readValue(state.inverterTechnology, false);
                };

                DBECalculator.prototype.loadData = function (url) {
                    this.data = null;
                    var req = new XMLHttpRequest();
                    req.overrideMimeType("application/json");
                    req.open("GET", url, false);
                    req.send("nocache=" + (Math.random() * 2000000));
                    if (req.status === 200) {
                        this.parseData(req.responseText);
                    }
                    return (this.data ? true : false);
                };
                return DBECalculator;
            })();
            buildingEnergy.DBECalculator = DBECalculator;
        })(calculator.buildingEnergy || (calculator.buildingEnergy = {}));
        var buildingEnergy = calculator.buildingEnergy;
    })(daikin.calculator || (daikin.calculator = {}));
    var calculator = daikin.calculator;
})(daikin || (daikin = {}));
//# sourceMappingURL=DBECalculator.js.map
