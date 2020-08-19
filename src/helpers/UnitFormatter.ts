import { AccelerationUnit, AmountOfSubstanceUnit, AmplitudeRatioUnit, AngleUnit, ApparentEnergyUnit, ApparentPowerUnit, AreaUnit, AreaDensityUnit, AreaMomentOfInertiaUnit, BitRateUnit, BrakeSpecificFuelConsumptionUnit, CapacitanceUnit, CoefficientOfThermalExpansionUnit, DensityUnit, DurationUnit, DynamicViscosityUnit, ElectricAdmittanceUnit, ElectricChargeUnit, ElectricChargeDensityUnit, ElectricConductanceUnit, ElectricConductivityUnit, ElectricCurrentUnit, ElectricCurrentDensityUnit, ElectricCurrentGradientUnit, ElectricFieldUnit, ElectricInductanceUnit, ElectricPotentialUnit, ElectricPotentialAcUnit, ElectricPotentialDcUnit, ElectricResistanceUnit, ElectricResistivityUnit, EnergyUnit, EntropyUnit, ForceUnit, ForceChangeRateUnit, ForcePerLengthUnit, FrequencyUnit, HeatFluxUnit, HeatTransferCoefficientUnit, IlluminanceUnit, InformationUnit, IrradianceUnit, IrradiationUnit, KinematicViscosityUnit, LapseRateUnit, LengthUnit, LevelUnit, LinearDensityUnit, LuminousFluxUnit, LuminousIntensityUnit, MagneticFieldUnit, MagneticFluxUnit, MagnetizationUnit, MassUnit, MassFlowUnit, MassFluxUnit, MassMomentOfInertiaUnit, MolarEnergyUnit, MolarEntropyUnit, MolarityUnit, MolarMassUnit, PermeabilityUnit, PermittivityUnit, PowerUnit, PowerDensityUnit, PowerRatioUnit, PressureUnit, PressureChangeRateUnit, RatioUnit, ReactiveEnergyUnit, ReactivePowerUnit, RotationalAccelerationUnit, RotationalSpeedUnit, RotationalStiffnessUnit, RotationalStiffnessPerLengthUnit, SolidAngleUnit, SpecificEnergyUnit, SpecificEntropyUnit, SpecificVolumeUnit, SpecificWeightUnit, SpeedUnit, TemperatureUnit, TemperatureChangeRateUnit, TemperatureDeltaUnit, ThermalConductivityUnit, ThermalResistanceUnit, TorqueUnit, VitaminAUnit, VolumeUnit, VolumeFlowUnit, UnitOfMeasureModes } from './UnitEnumerations';

export default class UnitFormatter {

    public static _mode: UnitOfMeasureModes = UnitOfMeasureModes.Standard;
    static get UnitMode() {
        return UnitFormatter._mode;
    }

    static set UnitMode(value: UnitOfMeasureModes) {
        UnitFormatter._mode = value;
    }

    public static getFormat(value: number, abbreviation: string, precision: number | null = null): string {
        if (precision !== null) {
            const output = value.toFixed(precision);
            return output + ' ' + abbreviation;
        }
        return value + ' ' + abbreviation;
    }

    public static getAccelerationUnitString(unit: any) {
        switch (unit) {
            case AccelerationUnit.CentimeterPerSecondSquared: return ' cm/s²';
            case AccelerationUnit.DecimeterPerSecondSquared: return ' dm/s²';
            case AccelerationUnit.FootPerSecondSquared: return ' ft/s²';
            case AccelerationUnit.InchPerSecondSquared: return ' in/s²';
            case AccelerationUnit.KilometerPerSecondSquared: return ' km/s²';
            case AccelerationUnit.KnotPerHour: return ' kn/h';
            case AccelerationUnit.KnotPerMinute: return ' kn/min';
            case AccelerationUnit.KnotPerSecond: return ' kn/s';
            case AccelerationUnit.MeterPerSecondSquared: return ' m/s²';
            case AccelerationUnit.MicrometerPerSecondSquared: return ' µm/s²';
            case AccelerationUnit.MillimeterPerSecondSquared: return ' mm/s²';
            case AccelerationUnit.NanometerPerSecondSquared: return ' nm/s²';
            case AccelerationUnit.StandardGravity: return ' g';
            default: return '';
        }
    }

    public static getAmountOfSubstanceUnitString(unit: any) {
        switch (unit) {
            case AmountOfSubstanceUnit.Centimole: return ' cmol';
            case AmountOfSubstanceUnit.CentipoundMole: return ' clbmol';
            case AmountOfSubstanceUnit.Decimole: return ' dmol';
            case AmountOfSubstanceUnit.DecipoundMole: return ' dlbmol';
            case AmountOfSubstanceUnit.Kilomole: return ' kmol';
            case AmountOfSubstanceUnit.KilopoundMole: return ' klbmol';
            case AmountOfSubstanceUnit.Megamole: return ' Mmol';
            case AmountOfSubstanceUnit.Micromole: return ' µmol';
            case AmountOfSubstanceUnit.MicropoundMole: return ' µlbmol';
            case AmountOfSubstanceUnit.Millimole: return ' mmol';
            case AmountOfSubstanceUnit.MillipoundMole: return ' mlbmol';
            case AmountOfSubstanceUnit.Mole: return ' mol';
            case AmountOfSubstanceUnit.Nanomole: return ' nmol';
            case AmountOfSubstanceUnit.NanopoundMole: return ' nlbmol';
            case AmountOfSubstanceUnit.PoundMole: return ' lbmol';
            default: return '';
        }
    }

    public static getAmplitudeRatioUnitString(unit: any) {
        switch (unit) {
            case AmplitudeRatioUnit.DecibelMicrovolt: return ' dBµV';
            case AmplitudeRatioUnit.DecibelMillivolt: return ' dBmV';
            case AmplitudeRatioUnit.DecibelUnloaded: return ' dBu';
            case AmplitudeRatioUnit.DecibelVolt: return ' dBV';
            default: return '';
        }
    }

    public static getAngleUnitString(unit: any) {
        switch (unit) {
            case AngleUnit.Degree: return ' °';
            case AngleUnit.Gradian: return ' g';
            case AngleUnit.Radian: return ' rad';
            default: return '';
        }
    }

    public static getApparentEnergyUnitString(unit: any) {
        switch (unit) {
            case ApparentEnergyUnit.KilovoltampereHour: return ' kVAh';
            case ApparentEnergyUnit.MegavoltampereHour: return ' MVAh';
            case ApparentEnergyUnit.VoltampereHour: return ' VAh';
            default: return '';
        }
    }

    public static getApparentPowerUnitString(unit: any) {
        switch (unit) {
            case ApparentPowerUnit.Gigavoltampere: return ' GVA';
            case ApparentPowerUnit.Kilovoltampere: return ' kVA';
            case ApparentPowerUnit.Megavoltampere: return ' MVA';
            case ApparentPowerUnit.Voltampere: return ' VA';
            default: return '';
        }
    }

    public static getAreaUnitString(unit: any) {
        switch (unit) {
            case AreaUnit.Acre: return ' ac';
            case AreaUnit.Hectare: return ' ha';
            case AreaUnit.SquareCentimeter: return ' cm²';
            case AreaUnit.SquareDecimeter: return ' dm²';
            case AreaUnit.SquareFoot: return ' ft²';
            case AreaUnit.SquareInch: return ' in²';
            case AreaUnit.SquareKilometer: return ' km²';
            case AreaUnit.SquareMeter: return ' m²';
            case AreaUnit.SquareMicrometer: return ' µm²';
            case AreaUnit.SquareMile: return ' mi²';
            case AreaUnit.SquareMillimeter: return ' mm²';
            case AreaUnit.SquareYard: return ' yd²';
            case AreaUnit.UsSurveySquareFoot: return ' ft² (US)';
            default: return '';
        }
    }

    public static getAreaDensityUnitString(unit: any) {
        switch (unit) {
            case AreaDensityUnit.KilogramPerSquareMeter: return ' kg/m²';
            default: return '';
        }
    }

    public static getAreaMomentOfInertiaUnitString(unit: any) {
        switch (unit) {
            case AreaMomentOfInertiaUnit.CentimeterToTheFourth: return ' cm⁴';
            case AreaMomentOfInertiaUnit.DecimeterToTheFourth: return ' dm⁴';
            case AreaMomentOfInertiaUnit.FootToTheFourth: return ' ft⁴';
            case AreaMomentOfInertiaUnit.InchToTheFourth: return ' in⁴';
            case AreaMomentOfInertiaUnit.MeterToTheFourth: return ' m⁴';
            case AreaMomentOfInertiaUnit.MillimeterToTheFourth: return ' mm⁴';
            default: return '';
        }
    }

    public static getBitRateUnitString(unit: any) {
        switch (unit) {
            case BitRateUnit.BitPerSecond: return ' bit/s';
            case BitRateUnit.BytePerSecond: return ' B/s';
            case BitRateUnit.ExabitPerSecond: return ' Ebit/s';
            case BitRateUnit.ExabytePerSecond: return ' EB/s';
            case BitRateUnit.ExbibitPerSecond: return ' Eibit/s';
            case BitRateUnit.ExbibytePerSecond: return ' EiB/s';
            case BitRateUnit.GibibitPerSecond: return ' Gibit/s';
            case BitRateUnit.GibibytePerSecond: return ' GiB/s';
            case BitRateUnit.GigabitPerSecond: return ' Gbit/s';
            case BitRateUnit.GigabytePerSecond: return ' GB/s';
            case BitRateUnit.KibibitPerSecond: return ' Kibit/s';
            case BitRateUnit.KibibytePerSecond: return ' KiB/s';
            case BitRateUnit.KilobitPerSecond: return ' kbit/s';
            case BitRateUnit.KilobytePerSecond: return ' kB/s';
            case BitRateUnit.MebibitPerSecond: return ' Mibit/s';
            case BitRateUnit.MebibytePerSecond: return ' MiB/s';
            case BitRateUnit.MegabitPerSecond: return ' Mbit/s';
            case BitRateUnit.MegabytePerSecond: return ' MB/s';
            case BitRateUnit.PebibitPerSecond: return ' Pibit/s';
            case BitRateUnit.PebibytePerSecond: return ' PiB/s';
            case BitRateUnit.PetabitPerSecond: return ' Pbit/s';
            case BitRateUnit.PetabytePerSecond: return ' PB/s';
            case BitRateUnit.TebibitPerSecond: return ' Tibit/s';
            case BitRateUnit.TebibytePerSecond: return ' TiB/s';
            case BitRateUnit.TerabitPerSecond: return ' Tbit/s';
            case BitRateUnit.TerabytePerSecond: return ' TB/s';
            default: return '';
        }
    }

    public static getBrakeSpecificFuelConsumptionUnitString(unit: any) {
        switch (unit) {
            case BrakeSpecificFuelConsumptionUnit.GramPerKiloWattHour: return ' g/kWh';
            case BrakeSpecificFuelConsumptionUnit.KilogramPerJoule: return ' kg/J';
            case BrakeSpecificFuelConsumptionUnit.PoundPerMechanicalHorsepowerHour: return ' lb/hph';
            default: return '';
        }
    }

    public static getCapacitanceUnitString(unit: any) {
        switch (unit) {
            case CapacitanceUnit.Farad: return ' F';
            case CapacitanceUnit.Kilofarad: return ' kF';
            case CapacitanceUnit.Megafarad: return ' MF';
            case CapacitanceUnit.Microfarad: return ' µF';
            case CapacitanceUnit.Millifarad: return ' mF';
            case CapacitanceUnit.Nanofarad: return ' nF';
            case CapacitanceUnit.Picofarad: return ' pF';
            default: return '';
        }
    }

    public static getCoefficientOfThermalExpansionUnitString(unit: any) {
        switch (unit) {
            case CoefficientOfThermalExpansionUnit.InverseDegreeCelsius: return ' °C⁻¹';
            case CoefficientOfThermalExpansionUnit.InverseDegreeFahrenheit: return ' °F⁻¹';
            case CoefficientOfThermalExpansionUnit.InverseKelvin: return ' K⁻¹';
            default: return '';
        }
    }

    public static getDensityUnitString(unit: any) {
        switch (unit) {
            case DensityUnit.KilogramPerCubicCentimeter: return ' kg/cm³';
            case DensityUnit.KilogramPerCubicMeter: return ' kg/m³';
            case DensityUnit.KilogramPerCubicMillimeter: return ' kg/mm³';
            case DensityUnit.KilopoundPerCubicFoot: return ' kip/ft³';
            case DensityUnit.KilopoundPerCubicInch: return ' kip/in³';
            case DensityUnit.PoundPerCubicFoot: return ' lb/ft³';
            case DensityUnit.PoundPerCubicInch: return ' lb/in³';
            case DensityUnit.TonnePerCubicCentimeter: return ' t/cm³';
            case DensityUnit.TonnePerCubicMeter: return ' t/m³';
            case DensityUnit.TonnePerCubicMillimeter: return ' t/mm³';
            case DensityUnit.PoundPerGallon: return ' ppg';
            default: return '';
        }
    }

    public static getDurationUnitString(unit: any) {
        switch (unit) {
            case DurationUnit.Day: return ' d';
            case DurationUnit.Hour: return ' h';
            case DurationUnit.Microsecond: return ' µs';
            case DurationUnit.Millisecond: return ' ms';
            case DurationUnit.Minute: return ' m';
            case DurationUnit.Month30: return ' mo';
            case DurationUnit.Nanosecond: return ' ns';
            case DurationUnit.Second: return ' s';
            case DurationUnit.Week: return ' wk';
            case DurationUnit.Year365: return ' yr';
            default: return '';
        }
    }

    public static getDynamicViscosityUnitString(unit: any) {
        switch (unit) {
            case DynamicViscosityUnit.Centipoise: return ' cP';
            case DynamicViscosityUnit.MicropascalSecond: return ' µPaS';
            case DynamicViscosityUnit.MillipascalSecond: return ' mPaS';
            case DynamicViscosityUnit.NewtonSecondPerMeterSquared: return ' Ns/m²';
            case DynamicViscosityUnit.PascalSecond: return ' PaS';
            case DynamicViscosityUnit.Poise: return ' P';
            default: return '';
        }
    }

    public static getElectricAdmittanceUnitString(unit: any) {
        switch (unit) {
            case ElectricAdmittanceUnit.Microsiemens: return ' µS';
            case ElectricAdmittanceUnit.Millisiemens: return ' mS';
            case ElectricAdmittanceUnit.Nanosiemens: return ' nS';
            case ElectricAdmittanceUnit.Siemens: return ' S';
            default: return '';
        }
    }

    public static getElectricChargeUnitString(unit: any) {
        switch (unit) {
            case ElectricChargeUnit.Coulomb: return ' C';
            default: return '';
        }
    }

    public static getElectricChargeDensityUnitString(unit: any) {
        switch (unit) {
            case ElectricChargeDensityUnit.CoulombPerCubicMeter: return ' C/m³';
            default: return '';
        }
    }

    public static getElectricConductanceUnitString(unit: any) {
        switch (unit) {
            case ElectricConductanceUnit.Microsiemens: return ' µS';
            case ElectricConductanceUnit.Millisiemens: return ' mS';
            case ElectricConductanceUnit.Siemens: return ' S';
            default: return '';
        }
    }

    public static getElectricConductivityUnitString(unit: any) {
        switch (unit) {
            case ElectricConductivityUnit.SiemensPerMeter: return ' S/m';
            default: return '';
        }
    }

    public static getElectricCurrentUnitString(unit: any) {
        switch (unit) {
            case ElectricCurrentUnit.Ampere: return ' A';
            case ElectricCurrentUnit.Centiampere: return ' cA';
            case ElectricCurrentUnit.Kiloampere: return ' kA';
            case ElectricCurrentUnit.Megaampere: return ' MA';
            case ElectricCurrentUnit.Microampere: return ' µA';
            case ElectricCurrentUnit.Milliampere: return ' mA';
            case ElectricCurrentUnit.Nanoampere: return ' nA';
            case ElectricCurrentUnit.Picoampere: return ' pA';
            default: return '';
        }
    }

    public static getElectricCurrentDensityUnitString(unit: any) {
        switch (unit) {
            case ElectricCurrentDensityUnit.AmperePerSquareMeter: return ' A/m²';
            default: return '';
        }
    }

    public static getElectricCurrentGradientUnitString(unit: any) {
        switch (unit) {
            case ElectricCurrentGradientUnit.AmperePerSecond: return ' A/s';
            default: return '';
        }
    }

    public static getElectricFieldUnitString(unit: any) {
        switch (unit) {
            case ElectricFieldUnit.VoltPerMeter: return ' V/m';
            default: return '';
        }
    }

    public static getElectricInductanceUnitString(unit: any) {
        switch (unit) {
            case ElectricInductanceUnit.Henry: return ' H';
            case ElectricInductanceUnit.Microhenry: return ' µH';
            case ElectricInductanceUnit.Millihenry: return ' mH';
            case ElectricInductanceUnit.Nanohenry: return ' nH';
            default: return '';
        }
    }

    public static getElectricPotentialUnitString(unit: any) {
        switch (unit) {
            case ElectricPotentialUnit.Kilovolt: return ' kV';
            case ElectricPotentialUnit.Megavolt: return ' MV';
            case ElectricPotentialUnit.Microvolt: return ' µV';
            case ElectricPotentialUnit.Millivolt: return ' mV';
            case ElectricPotentialUnit.Volt: return ' V';
            default: return '';
        }
    }

    public static getElectricPotentialAcUnitString(unit: any) {
        switch (unit) {
            case ElectricPotentialAcUnit.KilovoltAc: return ' kVac';
            case ElectricPotentialAcUnit.MegavoltAc: return ' MVac';
            case ElectricPotentialAcUnit.MicrovoltAc: return ' µVac';
            case ElectricPotentialAcUnit.MillivoltAc: return ' mVac';
            case ElectricPotentialAcUnit.VoltAc: return ' Vac';
            default: return '';
        }
    }

    public static getElectricPotentialDcUnitString(unit: any) {
        switch (unit) {
            case ElectricPotentialDcUnit.KilovoltDc: return ' kVdc';
            case ElectricPotentialDcUnit.MegavoltDc: return ' MVdc';
            case ElectricPotentialDcUnit.MicrovoltDc: return ' µVdc';
            case ElectricPotentialDcUnit.MillivoltDc: return ' mVdc';
            case ElectricPotentialDcUnit.VoltDc: return ' Vdc';
            default: return '';
        }
    }

    public static getElectricResistanceUnitString(unit: any) {
        switch (unit) {
            case ElectricResistanceUnit.Gigaohm: return ' GΩ';
            case ElectricResistanceUnit.Kiloohm: return ' kΩ';
            case ElectricResistanceUnit.Megaohm: return ' MΩ';
            case ElectricResistanceUnit.Milliohm: return ' mΩ';
            case ElectricResistanceUnit.Ohm: return ' Ω';
            default: return '';
        }
    }

    public static getElectricResistivityUnitString(unit: any) {
        switch (unit) {
            case ElectricResistivityUnit.KiloohmCentimeter: return ' kΩ·cm';
            case ElectricResistivityUnit.KiloohmMeter: return ' kΩ·m';
            case ElectricResistivityUnit.MegaohmCentimeter: return ' MΩ·cm';
            case ElectricResistivityUnit.MegaohmMeter: return ' MΩ·m';
            case ElectricResistivityUnit.MicroohmCentimeter: return ' µΩ·cm';
            case ElectricResistivityUnit.MicroohmMeter: return ' µΩ·m';
            case ElectricResistivityUnit.MilliohmCentimeter: return ' mΩ·cm';
            case ElectricResistivityUnit.MilliohmMeter: return ' mΩ·m';
            case ElectricResistivityUnit.NanoohmCentimeter: return ' nΩ·cm';
            case ElectricResistivityUnit.NanoohmMeter: return ' nΩ·m';
            case ElectricResistivityUnit.OhmCentimeter: return ' Ω·cm';
            case ElectricResistivityUnit.OhmMeter: return ' Ω·m';
            case ElectricResistivityUnit.PicoohmCentimeter: return ' pΩ·cm';
            case ElectricResistivityUnit.PicoohmMeter: return ' pΩ·m';
            default: return '';
        }
    }

    public static getEnergyUnitString(unit: any) {
        switch (unit) {
            case EnergyUnit.BritishThermalUnit: return ' BTU';
            case EnergyUnit.Calorie: return ' cal';
            case EnergyUnit.DecathermEc: return ' Dth (E.C.)';
            case EnergyUnit.DecathermImperial: return ' Dth (imp';
            case EnergyUnit.DecathermUs: return ' Dth (U.S.)';
            case EnergyUnit.ElectronVolt: return ' eV';
            case EnergyUnit.Erg: return ' erg';
            case EnergyUnit.FootPound: return ' ft·lb';
            case EnergyUnit.GigabritishThermalUnit: return ' GBTU';
            case EnergyUnit.GigawattHour: return ' GWh';
            case EnergyUnit.Joule: return ' J';
            case EnergyUnit.KilobritishThermalUnit: return ' kBTU';
            case EnergyUnit.Kilocalorie: return ' kcal';
            case EnergyUnit.Kilojoule: return ' kJ';
            case EnergyUnit.KilowattHour: return ' kWh';
            case EnergyUnit.MegabritishThermalUnit: return ' MBTU';
            case EnergyUnit.Megajoule: return ' MJ';
            case EnergyUnit.MegawattHour: return ' MWh';
            case EnergyUnit.ThermEc: return ' th (E.C.)';
            case EnergyUnit.ThermImperial: return ' th (imp';
            case EnergyUnit.ThermUs: return ' th (U.S.)';
            case EnergyUnit.WattHour: return ' Wh';
            default: return '';
        }
    }

    public static getEntropyUnitString(unit: any) {
        switch (unit) {
            case EntropyUnit.CaloriePerKelvin: return ' cal/K';
            case EntropyUnit.JoulePerDegreeCelsius: return ' J/C';
            case EntropyUnit.JoulePerKelvin: return ' J/K';
            case EntropyUnit.KilocaloriePerKelvin: return ' kcal/K';
            case EntropyUnit.KilojoulePerDegreeCelsius: return ' kJ/C';
            case EntropyUnit.KilojoulePerKelvin: return ' kJ/K';
            case EntropyUnit.MegajoulePerKelvin: return ' MJ/K';
            default: return '';
        }
    }

    public static getForceUnitString(unit: any) {
        switch (unit) {
            case ForceUnit.Dyn: return ' dyn';
            case ForceUnit.KilogramForce: return ' kgf';
            case ForceUnit.Kilonewton: return ' kN';
            case ForceUnit.KiloPond: return ' kp';
            case ForceUnit.Newton: return ' N';
            case ForceUnit.Poundal: return ' pdl';
            case ForceUnit.PoundForce: return ' lbf';
            case ForceUnit.TonneForce: return ' Ton';
            default: return '';
        }
    }

    public static getForceChangeRateUnitString(unit: any) {
        switch (unit) {
            case ForceChangeRateUnit.CentinewtonPerSecond: return ' cN/s';
            case ForceChangeRateUnit.DecanewtonPerMinute: return ' daN/min';
            case ForceChangeRateUnit.DecanewtonPerSecond: return ' daN/s';
            case ForceChangeRateUnit.DecinewtonPerSecond: return ' dN/s';
            case ForceChangeRateUnit.KilonewtonPerMinute: return ' kN/min';
            case ForceChangeRateUnit.KilonewtonPerSecond: return ' kN/s';
            case ForceChangeRateUnit.MicronewtonPerSecond: return ' µN/s';
            case ForceChangeRateUnit.MillinewtonPerSecond: return ' mN/s';
            case ForceChangeRateUnit.NanonewtonPerSecond: return ' nN/s';
            case ForceChangeRateUnit.NewtonPerMinute: return ' N/min';
            case ForceChangeRateUnit.NewtonPerSecond: return ' N/s';
            default: return '';
        }
    }

    public static getForcePerLengthUnitString(unit: any) {
        switch (unit) {
            case ForcePerLengthUnit.CentinewtonPerMeter: return ' cN/m';
            case ForcePerLengthUnit.DecinewtonPerMeter: return ' dN/m';
            case ForcePerLengthUnit.KilogramForcePerMeter: return ' kgf/m';
            case ForcePerLengthUnit.KilonewtonPerMeter: return ' kN/m';
            case ForcePerLengthUnit.MeganewtonPerMeter: return ' MN/m';
            case ForcePerLengthUnit.MicronewtonPerMeter: return ' µN/m';
            case ForcePerLengthUnit.MillinewtonPerMeter: return ' mN/m';
            case ForcePerLengthUnit.NanonewtonPerMeter: return ' nN/m';
            case ForcePerLengthUnit.NewtonPerMeter: return ' N/m';
            default: return '';
        }
    }

    public static getFrequencyUnitString(unit: any) {
        switch (unit) {
            case FrequencyUnit.CyclePerHour: return ' cph';
            case FrequencyUnit.CyclePerMinute: return ' cpm';
            case FrequencyUnit.Gigahertz: return ' GHz';
            case FrequencyUnit.Hertz: return ' Hz';
            case FrequencyUnit.Kilohertz: return ' kHz';
            case FrequencyUnit.Megahertz: return ' MHz';
            case FrequencyUnit.RadianPerSecond: return ' rad/s';
            case FrequencyUnit.Terahertz: return ' THz';
            default: return '';
        }
    }

    public static getHeatFluxUnitString(unit: any) {
        switch (unit) {
            case HeatFluxUnit.BtuPerHourSquareFoot: return ' BTU/h·ft²';
            case HeatFluxUnit.BtuPerMinuteSquareFoot: return ' BTU/min·ft²';
            case HeatFluxUnit.BtuPerSecondSquareFoot: return ' BTU/s·ft²';
            case HeatFluxUnit.BtuPerSecondSquareInch: return ' BTU/s·in²';
            case HeatFluxUnit.CaloriePerSecondSquareCentimeter: return ' cal/s·cm²';
            case HeatFluxUnit.CentiwattPerSquareMeter: return ' cW/m²';
            case HeatFluxUnit.DeciwattPerSquareMeter: return ' dW/m²';
            case HeatFluxUnit.KilocaloriePerHourSquareMeter: return ' kcal/h·m²';
            case HeatFluxUnit.KilocaloriePerSecondSquareCentimeter: return ' kcal/s·cm²';
            case HeatFluxUnit.KilowattPerSquareMeter: return ' kW/m²';
            case HeatFluxUnit.MicrowattPerSquareMeter: return ' µW/m²';
            case HeatFluxUnit.MilliwattPerSquareMeter: return ' mW/m²';
            case HeatFluxUnit.NanowattPerSquareMeter: return ' nW/m²';
            case HeatFluxUnit.PoundForcePerFootSecond: return ' lbf/(ft·s)';
            case HeatFluxUnit.PoundPerSecondCubed: return ' lb/s³';
            case HeatFluxUnit.WattPerSquareFoot: return ' W/ft²';
            case HeatFluxUnit.WattPerSquareInch: return ' W/in²';
            case HeatFluxUnit.WattPerSquareMeter: return ' W/m²';
            default: return '';
        }
    }

    public static getHeatTransferCoefficientUnitString(unit: any) {
        switch (unit) {
            case HeatTransferCoefficientUnit.WattPerSquareMeterCelsius: return ' W/m²·°C';
            case HeatTransferCoefficientUnit.WattPerSquareMeterKelvin: return ' W/m²·K';
            default: return '';
        }
    }

    public static getIlluminanceUnitString(unit: any) {
        switch (unit) {
            case IlluminanceUnit.Kilolux: return ' klx';
            case IlluminanceUnit.Lux: return ' lx';
            case IlluminanceUnit.Megalux: return ' Mlx';
            case IlluminanceUnit.Millilux: return ' mlx';
            default: return '';
        }
    }

    public static getInformationUnitString(unit: any) {
        switch (unit) {
            case InformationUnit.Bit: return ' b';
            case InformationUnit.Byte: return ' B';
            case InformationUnit.Exabit: return ' Eb';
            case InformationUnit.Exabyte: return ' EB';
            case InformationUnit.Exbibit: return ' Eib';
            case InformationUnit.Exbibyte: return ' EiB';
            case InformationUnit.Gibibit: return ' Gib';
            case InformationUnit.Gibibyte: return ' GiB';
            case InformationUnit.Gigabit: return ' Gb';
            case InformationUnit.Gigabyte: return ' GB';
            case InformationUnit.Kibibit: return ' Kib';
            case InformationUnit.Kibibyte: return ' KiB';
            case InformationUnit.Kilobit: return ' kb';
            case InformationUnit.Kilobyte: return ' kB';
            case InformationUnit.Mebibit: return ' Mib';
            case InformationUnit.Mebibyte: return ' MiB';
            case InformationUnit.Megabit: return ' Mb';
            case InformationUnit.Megabyte: return ' MB';
            case InformationUnit.Pebibit: return ' Pib';
            case InformationUnit.Pebibyte: return ' PiB';
            case InformationUnit.Petabit: return ' Pb';
            case InformationUnit.Petabyte: return ' PB';
            case InformationUnit.Tebibit: return ' Tib';
            case InformationUnit.Tebibyte: return ' TiB';
            case InformationUnit.Terabit: return ' Tb';
            case InformationUnit.Terabyte: return ' TB';
            default: return '';
        }
    }

    public static getIrradianceUnitString(unit: any) {
        switch (unit) {
            case IrradianceUnit.KilowattPerSquareCentimeter: return ' kW/cm²';
            case IrradianceUnit.KilowattPerSquareMeter: return ' kW/m²';
            case IrradianceUnit.MegawattPerSquareCentimeter: return ' MW/cm²';
            case IrradianceUnit.MegawattPerSquareMeter: return ' MW/m²';
            case IrradianceUnit.MicrowattPerSquareCentimeter: return ' µW/cm²';
            case IrradianceUnit.MicrowattPerSquareMeter: return ' µW/m²';
            case IrradianceUnit.MilliwattPerSquareCentimeter: return ' mW/cm²';
            case IrradianceUnit.MilliwattPerSquareMeter: return ' mW/m²';
            case IrradianceUnit.NanowattPerSquareCentimeter: return ' nW/cm²';
            case IrradianceUnit.NanowattPerSquareMeter: return ' nW/m²';
            case IrradianceUnit.PicowattPerSquareCentimeter: return ' pW/cm²';
            case IrradianceUnit.PicowattPerSquareMeter: return ' pW/m²';
            case IrradianceUnit.WattPerSquareCentimeter: return ' W/cm²';
            case IrradianceUnit.WattPerSquareMeter: return ' W/m²';
            default: return '';
        }
    }

    public static getIrradiationUnitString(unit: any) {
        switch (unit) {
            case IrradiationUnit.JoulePerSquareMeter: return ' J/m²';
            case IrradiationUnit.JoulePerSquareMillimeter: return ' J/mm²';
            case IrradiationUnit.KilowattHourPerSquareMeter: return ' kWh/m²';
            case IrradiationUnit.WattHourPerSquareMeter: return ' Wh/m²';
            default: return '';
        }
    }

    public static getKinematicViscosityUnitString(unit: any) {
        switch (unit) {
            case KinematicViscosityUnit.Centistokes: return ' cSt';
            case KinematicViscosityUnit.Decistokes: return ' dSt';
            case KinematicViscosityUnit.Kilostokes: return ' kSt';
            case KinematicViscosityUnit.Microstokes: return ' µSt';
            case KinematicViscosityUnit.Millistokes: return ' mSt';
            case KinematicViscosityUnit.Nanostokes: return ' nSt';
            case KinematicViscosityUnit.SquareMeterPerSecond: return ' m²/s';
            case KinematicViscosityUnit.Stokes: return ' St';
            default: return '';
        }
    }

    public static getLapseRateUnitString(unit: any) {
        switch (unit) {
            case LapseRateUnit.DegreeCelsiusPerKilometer: return ' ∆°C/km';
            default: return '';
        }
    }

    public static getLengthUnitString(unit: any) {
        switch (unit) {
            case LengthUnit.Centimeter: return ' cm';
            case LengthUnit.Decimeter: return ' dm';
            case LengthUnit.Foot: return ' ft';
            case LengthUnit.Inch: return ' in';
            case LengthUnit.Kilometer: return ' km';
            case LengthUnit.Meter: return ' m';
            case LengthUnit.Microinch: return ' µin';
            case LengthUnit.Micrometer: return ' µm';
            case LengthUnit.Mil: return ' mil';
            case LengthUnit.Mile: return ' mi';
            case LengthUnit.Millimeter: return ' mm';
            case LengthUnit.Nanometer: return ' nm';
            case LengthUnit.Yard: return ' yd';
            default: return '';
        }
    }

    public static getLevelUnitString(unit: any) {
        switch (unit) {
            case LevelUnit.Decibel: return ' dB';
            case LevelUnit.Neper: return ' Np';
            default: return '';
        }
    }

    public static getLinearDensityUnitString(unit: any) {
        switch (unit) {
            case LinearDensityUnit.GramPerMeter: return ' g/m';
            case LinearDensityUnit.KilogramPerMeter: return ' kg/m';
            case LinearDensityUnit.PoundPerFoot: return ' lb/ft';
            default: return '';
        }
    }

    public static getLuminousFluxUnitString(unit: any) {
        switch (unit) {
            case LuminousFluxUnit.Lumen: return ' lm';
            default: return '';
        }
    }

    public static getLuminousIntensityUnitString(unit: any) {
        switch (unit) {
            case LuminousIntensityUnit.Candela: return ' cd';
            default: return '';
        }
    }

    public static getMagneticFieldUnitString(unit: any) {
        switch (unit) {
            case MagneticFieldUnit.Microtesla: return ' µT';
            case MagneticFieldUnit.Millitesla: return ' mT';
            case MagneticFieldUnit.Nanotesla: return ' nT';
            case MagneticFieldUnit.Tesla: return ' T';
            default: return '';
        }
    }

    public static getMagneticFluxUnitString(unit: any) {
        switch (unit) {
            case MagneticFluxUnit.Weber: return ' Wb';
            default: return '';
        }
    }

    public static getMagnetizationUnitString(unit: any) {
        switch (unit) {
            case MagnetizationUnit.AmperePerMeter: return ' A/m';
            default: return '';
        }
    }

    public static getMassUnitString(unit: any) {
        switch (unit) {
            case MassUnit.Centigram: return ' cg';
            case MassUnit.Decagram: return ' dag';
            case MassUnit.Decigram: return ' dg';
            case MassUnit.Grain: return ' gr';
            case MassUnit.Gram: return ' g';
            case MassUnit.Hectogram: return ' hg';
            case MassUnit.Kilogram: return ' kg';
            case MassUnit.Kilopound: return ' klb';
            case MassUnit.Kilotonne: return ' kt';
            case MassUnit.LongHundredweight: return ' cwt';
            case MassUnit.LongTon: return ' long tn';
            case MassUnit.Megapound: return ' Mlb';
            case MassUnit.Megatonne: return ' Mt';
            case MassUnit.Microgram: return ' µg';
            case MassUnit.Milligram: return ' mg';
            case MassUnit.Nanogram: return ' ng';
            case MassUnit.Ounce: return ' oz';
            case MassUnit.Pound: return ' lbs';
            case MassUnit.ShortHundredweight: return ' cwt';
            case MassUnit.ShortTon: return ' short tn';
            case MassUnit.Slug: return ' slug';
            case MassUnit.Stone: return ' st';
            case MassUnit.Tonne: return ' t';
            default: return '';
        }
    }

    public static getMassFlowUnitString(unit: any) {
        switch (unit) {
            case MassFlowUnit.CentigramPerDay: return ' cg/d';
            case MassFlowUnit.CentigramPerSecond: return ' cg/S';
            case MassFlowUnit.DecagramPerDay: return ' dag/d';
            case MassFlowUnit.DecagramPerSecond: return ' dag/S';
            case MassFlowUnit.DecigramPerDay: return ' dg/d';
            case MassFlowUnit.DecigramPerSecond: return ' dg/S';
            case MassFlowUnit.GramPerDay: return ' g/d';
            case MassFlowUnit.GramPerSecond: return ' g/S';
            case MassFlowUnit.HectogramPerDay: return ' hg/d';
            case MassFlowUnit.HectogramPerSecond: return ' hg/S';
            case MassFlowUnit.KilogramPerDay: return ' kg/d';
            case MassFlowUnit.KilogramPerHour: return ' kg/h';
            case MassFlowUnit.KilogramPerMinute: return ' kg/min';
            case MassFlowUnit.KilogramPerSecond: return ' kg/S';
            case MassFlowUnit.MegagramPerDay: return ' Mg/d';
            case MassFlowUnit.MegapoundPerDay: return ' Mlb/d';
            case MassFlowUnit.MegapoundPerHour: return ' Mlb/h';
            case MassFlowUnit.MegapoundPerMinute: return ' Mlb/min';
            case MassFlowUnit.MicrogramPerDay: return ' µg/d';
            case MassFlowUnit.MicrogramPerSecond: return ' µg/S';
            case MassFlowUnit.MilligramPerDay: return ' mg/d';
            case MassFlowUnit.MilligramPerSecond: return ' mg/S';
            case MassFlowUnit.NanogramPerDay: return ' ng/d';
            case MassFlowUnit.NanogramPerSecond: return ' ng/S';
            case MassFlowUnit.PoundPerDay: return ' lb/d';
            case MassFlowUnit.PoundPerHour: return ' lb/h';
            case MassFlowUnit.PoundPerMinute: return ' lb/min';
            case MassFlowUnit.ShortTonPerHour: return ' short tn/h';
            case MassFlowUnit.TonnePerDay: return ' t/d';
            case MassFlowUnit.TonnePerHour: return ' t/h';
            default: return '';
        }
    }

    public static getMassFluxUnitString(unit: any) {
        switch (unit) {
            case MassFluxUnit.GramPerSecondPerSquareMeter: return ' g·s⁻¹·m⁻²';
            case MassFluxUnit.KilogramPerSecondPerSquareMeter: return ' kg·s⁻¹·m⁻²';
            default: return '';
        }
    }

    public static getMassMomentOfInertiaUnitString(unit: any) {
        switch (unit) {
            case MassMomentOfInertiaUnit.GramSquareCentimeter: return ' g·cm²';
            case MassMomentOfInertiaUnit.GramSquareDecimeter: return ' g·dm²';
            case MassMomentOfInertiaUnit.GramSquareMeter: return ' g·m²';
            case MassMomentOfInertiaUnit.GramSquareMillimeter: return ' g·mm²';
            case MassMomentOfInertiaUnit.KilogramSquareCentimeter: return ' kg·cm²';
            case MassMomentOfInertiaUnit.KilogramSquareDecimeter: return ' kg·dm²';
            case MassMomentOfInertiaUnit.KilogramSquareMeter: return ' kg·m²';
            case MassMomentOfInertiaUnit.KilogramSquareMillimeter: return ' kg·mm²';
            case MassMomentOfInertiaUnit.KilotonneSquareCentimeter: return ' kt·cm²';
            case MassMomentOfInertiaUnit.KilotonneSquareDecimeter: return ' kt·dm²';
            case MassMomentOfInertiaUnit.KilotonneSquareMeter: return ' kt·m²';
            case MassMomentOfInertiaUnit.KilotonneSquareMilimeter: return ' kt·mm²';
            case MassMomentOfInertiaUnit.MegatonneSquareCentimeter: return ' Mt·cm²';
            case MassMomentOfInertiaUnit.MegatonneSquareDecimeter: return ' Mt·dm²';
            case MassMomentOfInertiaUnit.MegatonneSquareMeter: return ' Mt·m²';
            case MassMomentOfInertiaUnit.MegatonneSquareMilimeter: return ' Mt·mm²';
            case MassMomentOfInertiaUnit.MilligramSquareCentimeter: return ' mg·cm²';
            case MassMomentOfInertiaUnit.MilligramSquareDecimeter: return ' mg·dm²';
            case MassMomentOfInertiaUnit.MilligramSquareMeter: return ' mg·m²';
            case MassMomentOfInertiaUnit.MilligramSquareMillimeter: return ' mg·mm²';
            case MassMomentOfInertiaUnit.PoundSquareFoot: return ' lb·ft²';
            case MassMomentOfInertiaUnit.PoundSquareInch: return ' lb·in²';
            case MassMomentOfInertiaUnit.SlugSquareFoot: return ' slug·ft²';
            case MassMomentOfInertiaUnit.SlugSquareInch: return ' slug·in²';
            case MassMomentOfInertiaUnit.TonneSquareCentimeter: return ' t·cm²';
            case MassMomentOfInertiaUnit.TonneSquareDecimeter: return ' t·dm²';
            case MassMomentOfInertiaUnit.TonneSquareMeter: return ' t·m²';
            case MassMomentOfInertiaUnit.TonneSquareMilimeter: return ' t·mm²';
            default: return '';
        }
    }

    public static getMolarEnergyUnitString(unit: any) {
        switch (unit) {
            case MolarEnergyUnit.JoulePerMole: return ' J/mol';
            case MolarEnergyUnit.KilojoulePerMole: return ' kJ/mol';
            case MolarEnergyUnit.MegajoulePerMole: return ' MJ/mol';
            default: return '';
        }
    }

    public static getMolarEntropyUnitString(unit: any) {
        switch (unit) {
            case MolarEntropyUnit.JoulePerMoleKelvin: return ' J/(mol*K)';
            case MolarEntropyUnit.KilojoulePerMoleKelvin: return ' kJ/(mol*K)';
            case MolarEntropyUnit.MegajoulePerMoleKelvin: return ' MJ/(mol*K)';
            default: return '';
        }
    }

    public static getMolarityUnitString(unit: any) {
        switch (unit) {
            case MolarityUnit.CentimolesPerLiter: return ' cmol/L';
            case MolarityUnit.DecimolesPerLiter: return ' dmol/L';
            case MolarityUnit.MicromolesPerLiter: return ' µmol/L';
            case MolarityUnit.MillimolesPerLiter: return ' mmol/L';
            case MolarityUnit.MolesPerCubicMeter: return ' mol/m³';
            case MolarityUnit.MolesPerLiter: return ' mol/L';
            case MolarityUnit.NanomolesPerLiter: return ' nmol/L';
            case MolarityUnit.PicomolesPerLiter: return ' pmol/L';
            default: return '';
        }
    }

    public static getMolarMassUnitString(unit: any) {
        switch (unit) {
            case MolarMassUnit.CentigramPerMole: return ' cg/mol';
            case MolarMassUnit.DecagramPerMole: return ' dag/mol';
            case MolarMassUnit.DecigramPerMole: return ' dg/mol';
            case MolarMassUnit.GramPerMole: return ' g/mol';
            case MolarMassUnit.HectogramPerMole: return ' hg/mol';
            case MolarMassUnit.KilogramPerMole: return ' kg/mol';
            case MolarMassUnit.KilopoundPerMole: return ' klb/mol';
            case MolarMassUnit.MegapoundPerMole: return ' Mlb/mol';
            case MolarMassUnit.MicrogramPerMole: return ' µg/mol';
            case MolarMassUnit.MilligramPerMole: return ' mg/mol';
            case MolarMassUnit.NanogramPerMole: return ' ng/mol';
            case MolarMassUnit.PoundPerMole: return ' lb/mol';
            default: return '';
        }
    }

    public static getPermeabilityUnitString(unit: any) {
        switch (unit) {
            case PermeabilityUnit.HenryPerMeter: return ' H/m';
            default: return '';
        }
    }

    public static getPermittivityUnitString(unit: any) {
        switch (unit) {
            case PermittivityUnit.FaradPerMeter: return ' F/m';
            default: return '';
        }
    }

    public static getPowerUnitString(unit: any) {
        switch (unit) {
            case PowerUnit.BoilerHorsepower: return ' hp(S)';
            case PowerUnit.BritishThermalUnitPerHour: return ' Btu/hr';
            case PowerUnit.Decawatt: return ' daW';
            case PowerUnit.Deciwatt: return ' dW';
            case PowerUnit.ElectricalHorsepower: return ' hp(E)';
            case PowerUnit.Femtowatt: return ' fW';
            case PowerUnit.Gigawatt: return ' GW';
            case PowerUnit.HydraulicHorsepower: return ' hp(H)';
            case PowerUnit.KilobritishThermalUnitPerHour: return ' kBtu/hr';
            case PowerUnit.Kilowatt: return ' kW';
            case PowerUnit.MechanicalHorsepower: return ' hp(I)';
            case PowerUnit.Megawatt: return ' MW';
            case PowerUnit.MetricHorsepower: return ' hp(M)';
            case PowerUnit.Microwatt: return ' µW';
            case PowerUnit.Milliwatt: return ' mW';
            case PowerUnit.Nanowatt: return ' nW';
            case PowerUnit.Petawatt: return ' PW';
            case PowerUnit.Picowatt: return ' pW';
            case PowerUnit.Terawatt: return ' TW';
            case PowerUnit.Watt: return ' W';
            default: return '';
        }
    }

    public static getPowerDensityUnitString(unit: any) {
        switch (unit) {
            case PowerDensityUnit.DecawattPerCubicFoot: return ' daW/ft³';
            case PowerDensityUnit.DecawattPerCubicInch: return ' daW/in³';
            case PowerDensityUnit.DecawattPerCubicMeter: return ' daW/m³';
            case PowerDensityUnit.DecawattPerLiter: return ' daW/l';
            case PowerDensityUnit.DeciwattPerCubicFoot: return ' dW/ft³';
            case PowerDensityUnit.DeciwattPerCubicInch: return ' dW/in³';
            case PowerDensityUnit.DeciwattPerCubicMeter: return ' dW/m³';
            case PowerDensityUnit.DeciwattPerLiter: return ' dW/l';
            case PowerDensityUnit.GigawattPerCubicFoot: return ' GW/ft³';
            case PowerDensityUnit.GigawattPerCubicInch: return ' GW/in³';
            case PowerDensityUnit.GigawattPerCubicMeter: return ' GW/m³';
            case PowerDensityUnit.GigawattPerLiter: return ' GW/l';
            case PowerDensityUnit.KilowattPerCubicFoot: return ' kW/ft³';
            case PowerDensityUnit.KilowattPerCubicInch: return ' kW/in³';
            case PowerDensityUnit.KilowattPerCubicMeter: return ' kW/m³';
            case PowerDensityUnit.KilowattPerLiter: return ' kW/l';
            case PowerDensityUnit.MegawattPerCubicFoot: return ' MW/ft³';
            case PowerDensityUnit.MegawattPerCubicInch: return ' MW/in³';
            case PowerDensityUnit.MegawattPerCubicMeter: return ' MW/m³';
            case PowerDensityUnit.MegawattPerLiter: return ' MW/l';
            case PowerDensityUnit.MicrowattPerCubicFoot: return ' µW/ft³';
            case PowerDensityUnit.MicrowattPerCubicInch: return ' µW/in³';
            case PowerDensityUnit.MicrowattPerCubicMeter: return ' µW/m³';
            case PowerDensityUnit.MicrowattPerLiter: return ' µW/l';
            case PowerDensityUnit.MilliwattPerCubicFoot: return ' mW/ft³';
            case PowerDensityUnit.MilliwattPerCubicInch: return ' mW/in³';
            case PowerDensityUnit.MilliwattPerCubicMeter: return ' mW/m³';
            case PowerDensityUnit.MilliwattPerLiter: return ' mW/l';
            case PowerDensityUnit.NanowattPerCubicFoot: return ' nW/ft³';
            case PowerDensityUnit.NanowattPerCubicInch: return ' nW/in³';
            case PowerDensityUnit.NanowattPerCubicMeter: return ' nW/m³';
            case PowerDensityUnit.NanowattPerLiter: return ' nW/l';
            case PowerDensityUnit.PicowattPerCubicFoot: return ' pW/ft³';
            case PowerDensityUnit.PicowattPerCubicInch: return ' pW/in³';
            case PowerDensityUnit.PicowattPerCubicMeter: return ' pW/m³';
            case PowerDensityUnit.PicowattPerLiter: return ' pW/l';
            case PowerDensityUnit.TerawattPerCubicFoot: return ' TW/ft³';
            case PowerDensityUnit.TerawattPerCubicInch: return ' TW/in³';
            case PowerDensityUnit.TerawattPerCubicMeter: return ' TW/m³';
            case PowerDensityUnit.TerawattPerLiter: return ' TW/l';
            case PowerDensityUnit.WattPerCubicFoot: return ' W/ft³';
            case PowerDensityUnit.WattPerCubicInch: return ' W/in³';
            case PowerDensityUnit.WattPerCubicMeter: return ' W/m³';
            case PowerDensityUnit.WattPerLiter: return ' W/l';
            default: return '';
        }
    }

    public static getPowerRatioUnitString(unit: any) {
        switch (unit) {
            case PowerRatioUnit.DecibelMilliwatt: return ' dBmW';
            case PowerRatioUnit.DecibelWatt: return ' dBW';
            default: return '';
        }
    }

    public static getPressureUnitString(unit: any) {
        switch (unit) {
            case PressureUnit.Atmosphere: return ' atm';
            case PressureUnit.Bar: return ' bar';
            case PressureUnit.Centibar: return ' cbar';
            case PressureUnit.Decapascal: return ' daPa';
            case PressureUnit.Decibar: return ' dbar';
            case PressureUnit.Gigapascal: return ' GPa';
            case PressureUnit.Hectopascal: return ' hPa';
            case PressureUnit.Kilobar: return ' kbar';
            case PressureUnit.KilogramForcePerSquareCentimeter: return ' kgf/cm²';
            case PressureUnit.KilogramForcePerSquareMeter: return ' kgf/m²';
            case PressureUnit.KilogramForcePerSquareMillimeter: return ' kgf/mm²';
            case PressureUnit.KilonewtonPerSquareCentimeter: return ' kN/cm²';
            case PressureUnit.KilonewtonPerSquareMeter: return ' kN/m²';
            case PressureUnit.KilonewtonPerSquareMillimeter: return ' kN/mm²';
            case PressureUnit.Kilopascal: return ' kPa';
            case PressureUnit.KilopoundForcePerSquareFoot: return ' kipf/ft²';
            case PressureUnit.KilopoundForcePerSquareInch: return ' kipf/in²';
            case PressureUnit.Megabar: return ' Mbar';
            case PressureUnit.Megapascal: return ' MPa';
            case PressureUnit.Micropascal: return ' µPa';
            case PressureUnit.Millibar: return ' mbar';
            case PressureUnit.NewtonPerSquareCentimeter: return ' N/cm²';
            case PressureUnit.NewtonPerSquareMeter: return ' N/m²';
            case PressureUnit.NewtonPerSquareMillimeter: return ' N/mm²';
            case PressureUnit.Pascal: return ' Pa';
            case PressureUnit.PoundForcePerSquareFoot: return ' lb/ft²';
            case PressureUnit.PoundForcePerSquareInch: return ' psi';
            case PressureUnit.Psi: return ' psi';
            case PressureUnit.TechnicalAtmosphere: return ' at';
            case PressureUnit.TonneForcePerSquareCentimeter: return ' tf/cm²';
            case PressureUnit.TonneForcePerSquareMeter: return ' tf/m²';
            case PressureUnit.TonneForcePerSquareMillimeter: return ' tf/mm²';
            case PressureUnit.Torr: return ' torr';
            default: return '';
        }
    }

    public static getPressureChangeRateUnitString(unit: any) {
        switch (unit) {
            case PressureChangeRateUnit.AtmospherePerSecond: return ' atm/s';
            case PressureChangeRateUnit.KilopascalPerSecond: return ' kPa/s';
            case PressureChangeRateUnit.MegapascalPerSecond: return ' MPa/s';
            case PressureChangeRateUnit.PascalPerSecond: return ' Pa/s';
            default: return '';
        }
    }

    public static getRatioUnitString(unit: any) {
        switch (unit) {
            case RatioUnit.DecimalFraction: return '';
            case RatioUnit.PartPerBillion: return ' ppb';
            case RatioUnit.PartPerMillion: return ' ppm';
            case RatioUnit.PartPerThousand: return ' ‰';
            case RatioUnit.PartPerTrillion: return ' ppt';
            case RatioUnit.Percent: return ' %';
            default: return '';
        }
    }

    public static getReactiveEnergyUnitString(unit: any) {
        switch (unit) {
            case ReactiveEnergyUnit.KilovoltampereReactiveHour: return ' kvarh';
            case ReactiveEnergyUnit.MegavoltampereReactiveHour: return ' Mvarh';
            case ReactiveEnergyUnit.VoltampereReactiveHour: return ' varh';
            default: return '';
        }
    }

    public static getReactivePowerUnitString(unit: any) {
        switch (unit) {
            case ReactivePowerUnit.GigavoltampereReactive: return ' Gvar';
            case ReactivePowerUnit.KilovoltampereReactive: return ' kvar';
            case ReactivePowerUnit.MegavoltampereReactive: return ' Mvar';
            case ReactivePowerUnit.VoltampereReactive: return ' var';
            default: return '';
        }
    }

    public static getRotationalAccelerationUnitString(unit: any) {
        switch (unit) {
            case RotationalAccelerationUnit.DegreePerSecondSquared: return ' °/s²';
            case RotationalAccelerationUnit.RadianPerSecondSquared: return ' rad/s²';
            case RotationalAccelerationUnit.RevolutionPerMinutePerSecond: return ' rpm/s';
            default: return '';
        }
    }

    public static getRotationalSpeedUnitString(unit: any) {
        switch (unit) {
            case RotationalSpeedUnit.RevolutionPerMinute: return ' rpm';
            case RotationalSpeedUnit.RevolutionPerSecond: return ' r/s';
            default: return '';
        }
    }

    public static getRotationalStiffnessUnitString(unit: any) {
        switch (unit) {
            case RotationalStiffnessUnit.KilonewtonMeterPerRadian: return ' kN·m/rad';
            case RotationalStiffnessUnit.MeganewtonMeterPerRadian: return ' MN·m/rad';
            case RotationalStiffnessUnit.NewtonMeterPerRadian: return ' N·m/rad';
            default: return '';
        }
    }

    public static getRotationalStiffnessPerLengthUnitString(unit: any) {
        switch (unit) {
            case RotationalStiffnessPerLengthUnit.KilonewtonMeterPerRadianPerMeter: return ' kN·m/rad/m';
            case RotationalStiffnessPerLengthUnit.MeganewtonMeterPerRadianPerMeter: return ' MN·m/rad/m';
            case RotationalStiffnessPerLengthUnit.NewtonMeterPerRadianPerMeter: return ' N·m/rad/m';
            default: return '';
        }
    }

    public static getSolidAngleUnitString(unit: any) {
        switch (unit) {
            case SolidAngleUnit.Steradian: return ' sr';
            default: return '';
        }
    }

    public static getSpecificEnergyUnitString(unit: any) {
        switch (unit) {
            case SpecificEnergyUnit.BtuPerPound: return ' btu/lb';
            case SpecificEnergyUnit.CaloriePerGram: return ' cal/g';
            case SpecificEnergyUnit.JoulePerKilogram: return ' J/kg';
            case SpecificEnergyUnit.KilocaloriePerGram: return ' kcal/g';
            case SpecificEnergyUnit.KilojoulePerKilogram: return ' kJ/kg';
            case SpecificEnergyUnit.KilowattHourPerKilogram: return ' kWh/kg';
            case SpecificEnergyUnit.MegajoulePerKilogram: return ' MJ/kg';
            case SpecificEnergyUnit.MegawattHourPerKilogram: return ' MWh/kg';
            case SpecificEnergyUnit.WattHourPerKilogram: return ' Wh/kg';
            default: return '';
        }
    }

    public static getSpecificEntropyUnitString(unit: any) {
        switch (unit) {
            case SpecificEntropyUnit.CaloriePerGramKelvin: return ' cal/g';
            case SpecificEntropyUnit.JoulePerKilogramDegreeCelsius: return ' J/kg';
            case SpecificEntropyUnit.JoulePerKilogramKelvin: return ' J/kg';
            case SpecificEntropyUnit.KilocaloriePerGramKelvin: return ' kcal/g';
            case SpecificEntropyUnit.KilojoulePerKilogramDegreeCelsius: return ' kJ/kg';
            case SpecificEntropyUnit.KilojoulePerKilogramKelvin: return ' kJ/kg';
            case SpecificEntropyUnit.MegajoulePerKilogramDegreeCelsius: return ' MJ/kg';
            case SpecificEntropyUnit.MegajoulePerKilogramKelvin: return ' MJ/kg';
            default: return '';
        }
    }

    public static getSpecificVolumeUnitString(unit: any) {
        switch (unit) {
            case SpecificVolumeUnit.CubicFootPerPound: return ' ft³/lb';
            case SpecificVolumeUnit.CubicMeterPerKilogram: return ' m³/kg';
            case SpecificVolumeUnit.MillicubicMeterPerKilogram: return ' mm³/kg';
            default: return '';
        }
    }

    public static getSpecificWeightUnitString(unit: any) {
        switch (unit) {
            case SpecificWeightUnit.KilogramForcePerCubicCentimeter: return ' kgf/cm³';
            case SpecificWeightUnit.KilogramForcePerCubicMeter: return ' kgf/m³';
            case SpecificWeightUnit.KilogramForcePerCubicMillimeter: return ' kgf/mm³';
            case SpecificWeightUnit.KilonewtonPerCubicCentimeter: return ' kN/cm³';
            case SpecificWeightUnit.KilonewtonPerCubicMeter: return ' kN/m³';
            case SpecificWeightUnit.KilonewtonPerCubicMillimeter: return ' kN/mm³';
            case SpecificWeightUnit.KilopoundForcePerCubicFoot: return ' kipf/ft³';
            case SpecificWeightUnit.KilopoundForcePerCubicInch: return ' kipf/in³';
            case SpecificWeightUnit.MeganewtonPerCubicMeter: return ' MN/m³';
            case SpecificWeightUnit.NewtonPerCubicCentimeter: return ' N/cm³';
            case SpecificWeightUnit.NewtonPerCubicMeter: return ' N/m³';
            case SpecificWeightUnit.NewtonPerCubicMillimeter: return ' N/mm³';
            case SpecificWeightUnit.PoundForcePerCubicFoot: return ' lbf/ft³';
            case SpecificWeightUnit.PoundForcePerCubicInch: return ' lbf/in³';
            case SpecificWeightUnit.TonneForcePerCubicCentimeter: return ' tf/cm³';
            case SpecificWeightUnit.TonneForcePerCubicMeter: return ' tf/m³';
            case SpecificWeightUnit.TonneForcePerCubicMillimeter: return ' tf/mm³';
            default: return '';
        }
    }

    public static getSpeedUnitString(unit: any) {
        switch (unit) {
            case SpeedUnit.CentimeterPerSecond: return ' cm/s';
            case SpeedUnit.DecimeterPerSecond: return ' dm/s';
            case SpeedUnit.FootPerHour: return ' ft/h';
            case SpeedUnit.FootPerMinute: return ' ft/min';
            case SpeedUnit.FootPerSecond: return ' ft/s';
            case SpeedUnit.KilometerPerHour: return ' km/h';
            case SpeedUnit.KilometerPerSecond: return ' km/s';
            case SpeedUnit.Knot: return ' kn';
            case SpeedUnit.MeterPerMinute: return ' m/min';
            case SpeedUnit.MeterPerSecond: return ' m/s';
            case SpeedUnit.MicrometerPerSecond: return ' µm/s';
            case SpeedUnit.MilePerHour: return ' mph';
            case SpeedUnit.MillimeterPerSecond: return ' mm/s';
            case SpeedUnit.NanometerPerSecond: return ' nm/s';
            default: return '';
        }
    }

    public static getTemperatureUnitString(unit: any) {
        switch (unit) {
            case TemperatureUnit.DegreeCelsius: return ' °C';
            case TemperatureUnit.DegreeDelisle: return ' °De';
            case TemperatureUnit.DegreeFahrenheit: return ' °F';
            case TemperatureUnit.DegreeNewton: return ' °N';
            case TemperatureUnit.DegreeRankine: return ' °R';
            case TemperatureUnit.DegreeReaumur: return ' °Ré';
            case TemperatureUnit.DegreeRoemer: return ' °Rø';
            case TemperatureUnit.Kelvin: return ' K';
            default: return '';
        }
    }

    public static getTemperatureChangeRateUnitString(unit: any) {
        switch (unit) {
            case TemperatureChangeRateUnit.CentidegreeCelsiusPerSecond: return ' c°C/s';
            case TemperatureChangeRateUnit.DecadegreeCelsiusPerSecond: return ' da°C/s';
            case TemperatureChangeRateUnit.DecidegreeCelsiusPerSecond: return ' d°C/s';
            case TemperatureChangeRateUnit.DegreeCelsiusPerMinute: return ' °C/min';
            case TemperatureChangeRateUnit.DegreeCelsiusPerSecond: return ' °C/s';
            case TemperatureChangeRateUnit.HectodegreeCelsiusPerSecond: return ' h°C/s';
            case TemperatureChangeRateUnit.KilodegreeCelsiusPerSecond: return ' k°C/s';
            case TemperatureChangeRateUnit.MicrodegreeCelsiusPerSecond: return ' µ°C/s';
            case TemperatureChangeRateUnit.MillidegreeCelsiusPerSecond: return ' m°C/s';
            case TemperatureChangeRateUnit.NanodegreeCelsiusPerSecond: return ' n°C/s';
            default: return '';
        }
    }

    public static getTemperatureDeltaUnitString(unit: any) {
        switch (unit) {
            case TemperatureDeltaUnit.DegreeCelsius: return ' ∆°C';
            case TemperatureDeltaUnit.DegreeDelisle: return ' ∆°De';
            case TemperatureDeltaUnit.DegreeFahrenheit: return ' ∆°F';
            case TemperatureDeltaUnit.DegreeNewton: return ' ∆°N';
            case TemperatureDeltaUnit.DegreeRankine: return ' ∆°R';
            case TemperatureDeltaUnit.DegreeReaumur: return ' ∆°Ré';
            case TemperatureDeltaUnit.DegreeRoemer: return ' ∆°Rø';
            case TemperatureDeltaUnit.Kelvin: return ' ∆K';
            default: return '';
        }
    }

    public static getThermalConductivityUnitString(unit: any) {
        switch (unit) {
            case ThermalConductivityUnit.BtuPerHourFootFahrenheit: return ' BTU/h·ft·°F';
            case ThermalConductivityUnit.WattPerMeterKelvin: return ' W/m·K';
            default: return '';
        }
    }

    public static getThermalResistanceUnitString(unit: any) {
        switch (unit) {
            case ThermalResistanceUnit.HourSquareFeetDegreeFahrenheitPerBtu: return ' Hrft²°F/Btu';
            case ThermalResistanceUnit.SquareCentimeterHourDegreeCelsiusPerKilocalorie: return ' cm²Hr°C/kcal';
            case ThermalResistanceUnit.SquareCentimeterKelvinPerWatt: return ' cm²K/W';
            case ThermalResistanceUnit.SquareMeterDegreeCelsiusPerWatt: return ' m²°C/W';
            case ThermalResistanceUnit.SquareMeterKelvinPerKilowatt: return ' m²K/kW';
            default: return '';
        }
    }

    public static getTorqueUnitString(unit: any) {
        switch (unit) {
            case TorqueUnit.KilogramForceCentimeter: return ' kgf·cm';
            case TorqueUnit.KilogramForceMeter: return ' kgf·m';
            case TorqueUnit.KilogramForceMillimeter: return ' kgf·mm';
            case TorqueUnit.KilonewtonCentimeter: return ' kN·cm';
            case TorqueUnit.KilonewtonMeter: return ' kN·m';
            case TorqueUnit.KilonewtonMillimeter: return ' kN·mm';
            case TorqueUnit.KilopoundForceFoot: return ' kipf·ft';
            case TorqueUnit.KilopoundForceInch: return ' kipf·in';
            case TorqueUnit.MeganewtonCentimeter: return ' MN·cm';
            case TorqueUnit.MeganewtonMeter: return ' MN·m';
            case TorqueUnit.MeganewtonMillimeter: return ' MN·mm';
            case TorqueUnit.MegapoundForceFoot: return ' Mlbf·ft';
            case TorqueUnit.MegapoundForceInch: return ' Mlbf·in';
            case TorqueUnit.NewtonCentimeter: return ' N·cm';
            case TorqueUnit.NewtonMeter: return ' N·m';
            case TorqueUnit.NewtonMillimeter: return ' N·mm';
            case TorqueUnit.PoundForceFoot: return ' lbf·ft';
            case TorqueUnit.PoundForceInch: return ' lbf·in';
            case TorqueUnit.TonneForceCentimeter: return ' tf·cm';
            case TorqueUnit.TonneForceMeter: return ' tf·m';
            case TorqueUnit.TonneForceMillimeter: return ' tf·mm';
            default: return '';
        }
    }

    public static getVitaminAUnitString(unit: any) {
        switch (unit) {
            case VitaminAUnit.InternationalUnit: return ' IU';
            default: return '';
        }
    }

    public static getVolumeUnitString(unit: any) {
        switch (unit) {
            case VolumeUnit.Centiliter: return ' cl';
            case VolumeUnit.CubicCentimeter: return ' cm³';
            case VolumeUnit.CubicDecimeter: return ' dm³';
            case VolumeUnit.CubicFoot: return ' ft³';
            case VolumeUnit.CubicInch: return ' in³';
            case VolumeUnit.CubicKilometer: return ' km³';
            case VolumeUnit.CubicMeter: return ' m³';
            case VolumeUnit.CubicMile: return ' mi³';
            case VolumeUnit.CubicMillimeter: return ' mm³';
            case VolumeUnit.CubicYard: return ' yd³';
            case VolumeUnit.Deciliter: return ' dl';
            case VolumeUnit.Hectoliter: return ' hl';
            case VolumeUnit.ImperialGallon: return ' gal (imp';
            case VolumeUnit.ImperialOunce: return ' oz (imp';
            case VolumeUnit.Liter: return ' l';
            case VolumeUnit.Milliliter: return ' ml';
            case VolumeUnit.OilBarrel: return ' bbl';
            case VolumeUnit.UsGallon: return ' gal (U.S.)';
            case VolumeUnit.UsOunce: return ' oz (U.S.)';
            default: return '';
        }
    }

    public static getVolumeFlowUnitString(unit: any) {
        switch (unit) {
            case VolumeFlowUnit.AcreFootPerDay: return ' af/d';
            case VolumeFlowUnit.AcreFootPerHour: return ' af/h';
            case VolumeFlowUnit.AcreFootPerMinute: return ' af/m';
            case VolumeFlowUnit.AcreFootPerSecond: return ' af/s';
            case VolumeFlowUnit.CentiliterPerDay: return ' cl/day';
            case VolumeFlowUnit.CentiliterPerMinute: return ' cLPM';
            case VolumeFlowUnit.CubicDecimeterPerMinute: return ' dm³/min';
            case VolumeFlowUnit.CubicFootPerHour: return ' ft³/h';
            case VolumeFlowUnit.CubicFootPerMinute: return ' ft³/min';
            case VolumeFlowUnit.CubicFootPerSecond: return ' ft³/s';
            case VolumeFlowUnit.CubicMeterPerDay: return ' m³/d';
            case VolumeFlowUnit.CubicMeterPerHour: return ' m³/h';
            case VolumeFlowUnit.CubicMeterPerMinute: return ' m³/min';
            case VolumeFlowUnit.CubicMeterPerSecond: return ' m³/s';
            case VolumeFlowUnit.CubicMillimeterPerSecond: return ' mm³/s';
            case VolumeFlowUnit.CubicYardPerDay: return ' cy/day';
            case VolumeFlowUnit.CubicYardPerHour: return ' yd³/h';
            case VolumeFlowUnit.CubicYardPerMinute: return ' yd³/min';
            case VolumeFlowUnit.CubicYardPerSecond: return ' yd³/s';
            case VolumeFlowUnit.DeciliterPerDay: return ' dl/day';
            case VolumeFlowUnit.DeciliterPerMinute: return ' dLPM';
            case VolumeFlowUnit.KiloliterPerDay: return ' kl/day';
            case VolumeFlowUnit.KiloliterPerMinute: return ' kLPM';
            case VolumeFlowUnit.KilousGallonPerMinute: return ' kgal (U.S.)/min';
            case VolumeFlowUnit.LiterPerDay: return ' l/day';
            case VolumeFlowUnit.LiterPerHour: return ' LPH';
            case VolumeFlowUnit.LiterPerMinute: return ' LPM';
            case VolumeFlowUnit.LiterPerSecond: return ' LPS';
            case VolumeFlowUnit.MegaliterPerDay: return ' Ml/day';
            case VolumeFlowUnit.MegaukGallonPerSecond: return ' Mgal (imp';
            case VolumeFlowUnit.MicroliterPerDay: return ' µl/day';
            case VolumeFlowUnit.MicroliterPerMinute: return ' µLPM';
            case VolumeFlowUnit.MilliliterPerDay: return ' ml/day';
            case VolumeFlowUnit.MilliliterPerMinute: return ' mLPM';
            case VolumeFlowUnit.MillionUsGallonsPerDay: return ' MGD';
            case VolumeFlowUnit.NanoliterPerDay: return ' nl/day';
            case VolumeFlowUnit.NanoliterPerMinute: return ' nLPM';
            case VolumeFlowUnit.OilBarrelPerDay: return ' bbl/d';
            case VolumeFlowUnit.OilBarrelPerHour: return ' bbl/hr';
            case VolumeFlowUnit.OilBarrelPerMinute: return ' bbl/min';
            case VolumeFlowUnit.OilBarrelPerSecond: return ' bbl/s';
            case VolumeFlowUnit.UkGallonPerDay: return ' gal (U.S.)/d';
            case VolumeFlowUnit.UkGallonPerMinute: return ' gal (imp';
            case VolumeFlowUnit.UkGallonPerSecond: return ' gal (imp';
            case VolumeFlowUnit.UsGallonPerDay: return ' gpd';
            case VolumeFlowUnit.UsGallonPerHour: return ' gal (U.S.)/h';
            case VolumeFlowUnit.UsGallonPerMinute: return ' gal (U.S.)/min';
            case VolumeFlowUnit.UsGallonPerSecond: return ' gal (U.S.)/s';
            default: return '';
        }
    }
}