import { UnitOfMeasureModes, LengthUnit } from '../helpers/UnitEnumerations';
import UnitFormatter from '../helpers/UnitFormatter';

export interface ILength {
    centimeters?: number;

    decimeters?: number;

    feet?: number;

    inches?: number;

    kilometers?: number;

    meters?: number;

    microinches?: number;

    micrometers?: number;

    mils?: number;

    miles?: number;

    millimeters?: number;

    nanometers?: number;

    yards?: number;

}

export class Length implements ILength {
    constructor(meters: number) {
        this.meters = meters;
    }

    public meters = 0;

    get centimeters(): number {
        return this.meters / 0.01;
    }

    get decimeters(): number {
        return this.meters / 0.1;
    }

    get feet(): number {
        return this.meters / 0.3048;
    }

    get inches(): number {
        return this.meters / 0.0254;
    }

    get kilometers(): number {
        return this.meters / 1000.0;
    }

    get microinches(): number {
        return this.meters / 2.54E-08;
    }

    get micrometers(): number {
        return this.meters / 1E-06;
    }

    get mils(): number {
        return this.meters / 2.54E-05;
    }

    get miles(): number {
        return this.meters / 1609.34;
    }

    get millimeters(): number {
        return this.meters / 0.001;
    }

    get nanometers(): number {
        return this.meters / 1E-09;
    }

    get yards(): number {
        return this.meters / 0.9144;
    }

    static get Zero(): Length {
        return new Length(0);
    }

    public static FromCentimeters(centimeters: number): Length {
        return new Length(centimeters * 0.01);
    }

    public static FromDecimeters(decimeters: number): Length {
        return new Length(decimeters * 0.1);
    }

    public static FromFeet(feet: number): Length {
        return new Length(feet * 0.3048);
    }

    public static FromInches(inches: number): Length {
        return new Length(inches * 0.0254);
    }

    public static FromKilometers(kilometers: number): Length {
        return new Length(kilometers * 1000.0);
    }

    public static FromMeters(meters: number): Length {
        return new Length(meters);
    }

    public static FromMicroinches(microinches: number): Length {
        return new Length(microinches * 2.54E-08);
    }

    public static FromMicrometers(micrometers: number): Length {
        return new Length(micrometers * 1E-06);
    }

    public static FromMils(mils: number): Length {
        return new Length(mils * 2.54E-05);
    }

    public static FromMiles(miles: number): Length {
        return new Length(miles * 1609.34);
    }

    public static FromMillimeters(millimeters: number): Length {
        return new Length(millimeters * 0.001);
    }

    public static FromNanometers(nanometers: number): Length {
        return new Length(nanometers * 1E-09);
    }

    public static FromYards(yards: number): Length {
        return new Length(yards * 0.9144);
    }

    public static From(value: number, fromUnit: LengthUnit): Length {
        let result: Length;
        switch (fromUnit) {
            case LengthUnit.Centimeter:
                result = Length.FromCentimeters(value);
                break;
            case LengthUnit.Decimeter:
                result = Length.FromDecimeters(value);
                break;
            case LengthUnit.Foot:
                result = Length.FromFeet(value);
                break;
            case LengthUnit.Inch:
                result = Length.FromInches(value);
                break;
            case LengthUnit.Kilometer:
                result = Length.FromKilometers(value);
                break;
            case LengthUnit.Meter:
                result = Length.FromMeters(value);
                break;
            case LengthUnit.Microinch:
                result = Length.FromMicroinches(value);
                break;
            case LengthUnit.Micrometer:
                result = Length.FromMicrometers(value);
                break;
            case LengthUnit.Mil:
                result = Length.FromMils(value);
                break;
            case LengthUnit.Mile:
                result = Length.FromMiles(value);
                break;
            case LengthUnit.Millimeter:
                result = Length.FromMillimeters(value);
                break;
            case LengthUnit.Nanometer:
                result = Length.FromNanometers(value);
                break;
            case LengthUnit.Yard:
                result = Length.FromYards(value);
                break;
            default:
                throw new Error('Not Implemented');
        }
        return result;
    }

	public toString(): string {
        const flag: boolean = this.meters === 0.0;
		let result: string;
		if (flag) {
			result = '-';
		} else {
            switch (+UnitFormatter.UnitMode) {
                case UnitOfMeasureModes.Standard:
                    result = UnitFormatter.getFormat(this.feet, UnitFormatter.getLengthUnitString(LengthUnit.Foot), 2);
                    break;
                case UnitOfMeasureModes.Metric:
                    result = UnitFormatter.getFormat(this.meters, UnitFormatter.getLengthUnitString(LengthUnit.Meter), 2);
                    break;
                case UnitOfMeasureModes.MixedStandard:
                    result = UnitFormatter.getFormat(this.meters, UnitFormatter.getLengthUnitString(LengthUnit.Meter), 2);
                    break;
                case UnitOfMeasureModes.MixedMetric:
                    result = UnitFormatter.getFormat(this.feet, UnitFormatter.getLengthUnitString(LengthUnit.Foot), 2);
                    break;
                default:
                    result = '-';
                    break;
		    }
        }
        return result;
    }
}