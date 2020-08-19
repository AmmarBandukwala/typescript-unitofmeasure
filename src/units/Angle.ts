import { AngleUnit } from '../helpers/UnitEnumerations';
import UnitFormatter from '../helpers/UnitFormatter';

export interface IAngle {
    degrees?: number;

    gradians?: number;

    radians?: number;
}

export class Angle implements IAngle {
    constructor(degrees: number) {
        this.degrees = degrees;
    }

    public degrees = 0;

    get gradians(): number {
        return this.degrees / 0.9;
    }

    get radians(): number {
        return this.degrees / 180.0 * 3.1415926535897931;
    }

    static get Zero(): Angle {
        return new Angle(0);
    }

    public static FromDegrees(degrees: number): Angle {
        return new Angle(degrees);
    }

    public static FromGradians(gradians: number): Angle {
        return new Angle(gradians * 0.9);
    }

    public static FromRadians(radians: number): Angle {
        return new Angle(radians * 180.0 / 3.1415926535897931);
    }

    public static From(value: number, fromUnit: AngleUnit): Angle {
        let result: Angle;
        switch (fromUnit) {
            case AngleUnit.Degree:
                result = Angle.FromDegrees(value);
                break;
            case AngleUnit.Gradian:
                result = Angle.FromGradians(value);
                break;
            case AngleUnit.Radian:
                result = Angle.FromRadians(value);
                break;
            default:
                throw new Error('Not Implemented');
        }
        return result;
    }

    public toString(): string {
        const flag: boolean = this.degrees === 0.0;
        const result: string = flag ? '-' : UnitFormatter.getFormat(this.degrees, UnitFormatter.getAngleUnitString(AngleUnit.Degree), 2);
        return result;
    }
}