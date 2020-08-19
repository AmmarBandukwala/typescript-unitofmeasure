import { SpeedUnit, UnitOfMeasureModes } from '../helpers/UnitEnumerations';
import UnitFormatter from '../helpers/UnitFormatter';

export interface ISpeed {
    metersPerSecond?: number;

    centimetersPerSecond?: number;

    decimetersPerSecond?: number;

    feetPerSecond?: number;

    feetPerMinute?: number;

    feetPerHour?: number;

    kilometersPerHour?: number;

    kilometersPerSecond?: number;

    knots?: number;

    metersPerMinute?: number;

    micrometersPerSecond?: number;

    milesPerHour?: number;

    millimetersPerSecond?: number;

    nanometersPerSecond?: number;

}

export class Speed implements ISpeed {
    constructor(metersPerSecond: number) {
        this.metersPerSecond = metersPerSecond;
    }

    public metersPerSecond = 0;

    get centimetersPerSecond(): number {
        return this.metersPerSecond / 0.01;
    }

    get decimetersPerSecond(): number {
        return this.metersPerSecond / 0.1;
    }

    get feetPerSecond(): number {
        return this.metersPerSecond / 0.3048;
    }

    get feetPerMinute(): number {
        return this.metersPerSecond * 196.85;
    }

    get feetPerHour(): number {
        return this.metersPerSecond * 11811.02362;
    }

    get kilometersPerHour(): number {
        return this.metersPerSecond * 3.6;
    }

    get kilometersPerSecond(): number {
        return this.metersPerSecond / 1000.0;
    }

    get knots(): number {
        return this.metersPerSecond / 0.514444;
    }

    get metersPerMinute(): number {
        return this.metersPerSecond * 60.0;
    }

    get micrometersPerSecond(): number {
        return this.metersPerSecond / 1E-06;
    }

    get milesPerHour(): number {
        return this.metersPerSecond / 0.44704;
    }

    get millimetersPerSecond(): number {
        return this.metersPerSecond / 0.001;
    }

    get nanometersPerSecond(): number {
        return this.metersPerSecond / 1E-09;
    }

    static get Zero(): Speed {
        return new Speed(0);
    }

    public static FromCentimetersPerSecond(centimeterspersecond: number): Speed {
        return new Speed(centimeterspersecond * 0.01);
    }

    public static FromDecimetersPerSecond(decimeterspersecond: number): Speed {
        return new Speed(decimeterspersecond * 0.1);
    }

    public static FromFeetPerSecond(feetpersecond: number): Speed {
        return new Speed(feetpersecond * 0.3048);
    }

    public static FromFeetPerMinute(feetperminute: number): Speed {
        return new Speed(feetperminute * 0.00508);
    }

    public static FromFeetPerHour(feetPerHour: number): Speed {
        return new Speed(feetPerHour / 11811.02362);
    }

    public static FromKilometersPerHour(kilometersperhour: number): Speed {
        return new Speed(kilometersperhour / 3.6);
    }

    public static FromKilometersPerSecond(kilometerspersecond: number): Speed {
        return new Speed(kilometerspersecond * 1000.0);
    }

    public static FromKnots(knots: number): Speed {
        return new Speed(knots * 0.514444);
    }

    public static FromMetersPerSecond(meterspersecond: number): Speed {
        return new Speed(meterspersecond);
    }

    public static FromMetersPerMinute(metersperMinute: number): Speed {
        return new Speed(metersperMinute / 60.0);
    }

    public static FromMicrometersPerSecond(micrometerspersecond: number): Speed {
        return new Speed(micrometerspersecond * 1E-06);
    }

    public static FromMilesPerHour(milesperhour: number): Speed {
        return new Speed(milesperhour * 0.44704);
    }

    public static FromMillimetersPerSecond(millimeterspersecond: number): Speed {
        return new Speed(millimeterspersecond * 0.001);
    }

    public static FromNanometersPerSecond(nanometerspersecond: number): Speed {
        return new Speed(nanometerspersecond * 1E-09);
    }

    public static From(value: number, fromUnit: SpeedUnit): Speed {
        let result: Speed;
        switch (fromUnit) {
            case SpeedUnit.CentimeterPerSecond:
                result = Speed.FromCentimetersPerSecond(value);
                break;
            case SpeedUnit.DecimeterPerSecond:
                result = Speed.FromDecimetersPerSecond(value);
                break;
            case SpeedUnit.FootPerSecond:
                result = Speed.FromFeetPerSecond(value);
                break;
            case SpeedUnit.FootPerMinute:
                result = Speed.FromFeetPerMinute(value);
                break;
            case SpeedUnit.FootPerHour:
                result = Speed.FromFeetPerHour(value);
                break;
            case SpeedUnit.KilometerPerHour:
                result = Speed.FromKilometersPerHour(value);
                break;
            case SpeedUnit.KilometerPerSecond:
                result = Speed.FromKilometersPerSecond(value);
                break;
            case SpeedUnit.Knot:
                result = Speed.FromKnots(value);
                break;
            case SpeedUnit.MeterPerSecond:
                result = Speed.FromMetersPerSecond(value);
                break;
            case SpeedUnit.MeterPerMinute:
                result = Speed.FromMetersPerMinute(value);
                break;
            case SpeedUnit.MicrometerPerSecond:
                result = Speed.FromMicrometersPerSecond(value);
                break;
            case SpeedUnit.MilePerHour:
                result = Speed.FromMilesPerHour(value);
                break;
            case SpeedUnit.MillimeterPerSecond:
                result = Speed.FromMillimetersPerSecond(value);
                break;
            case SpeedUnit.NanometerPerSecond:
                result = Speed.FromNanometersPerSecond(value);
                break;
            default:
                throw new Error('Not Implemented');
        }
        return result;
    }

    public toString(): string {
        const flag: boolean = this.metersPerSecond === 0.0;
        let result: string;
        if (flag) {
            result = '-';
        } else {
            switch (+UnitFormatter.UnitMode) {
                case UnitOfMeasureModes.Standard:
                    result = UnitFormatter.getFormat(this.feetPerMinute, UnitFormatter.getSpeedUnitString(SpeedUnit.FootPerMinute), 2);
                    break;
                case UnitOfMeasureModes.Metric:
                    result = UnitFormatter.getFormat(this.metersPerMinute, UnitFormatter.getSpeedUnitString(SpeedUnit.MeterPerMinute), 2);
                    break;
                case UnitOfMeasureModes.MixedStandard:
                    result = UnitFormatter.getFormat(this.metersPerMinute, UnitFormatter.getSpeedUnitString(SpeedUnit.MeterPerMinute), 2);
                    break;
                case UnitOfMeasureModes.MixedMetric:
                    result = UnitFormatter.getFormat(this.feetPerMinute, UnitFormatter.getSpeedUnitString(SpeedUnit.FootPerMinute), 2);
                    break;
                default:
                    result = '-';
                    break;
            }
        }
        return result;
    }
}