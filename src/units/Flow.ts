import { FlowUnit, UnitOfMeasureModes } from '../helpers/UnitEnumerations';
import UnitFormatter from '../helpers/UnitFormatter';

export interface IFlow {
    cubicFeetPerMinute?: number;

    cubicFeetPerSecond?: number;

    cubicMetersPerHour?: number;

    cubicMetersPerMinute?: number;

    cubicMetersPerSecond?: number;

    millionUsGallonsPerDay?: number;

    millionCubicFeetPerDay?: number;

    gallonPerMinute?: number;

    barrelPerDay?: number;

    barrelPerMinute?: number;

    barrelPerHour?: number;

}

export class Flow implements IFlow {
    constructor(cubicmeterspersecond: number) {
        this.cubicMetersPerSecond = cubicmeterspersecond;
    }

    public cubicMetersPerSecond = 0;

    get cubicFeetPerMinute(): number {
        return this.cubicMetersPerSecond * 2118.880003;
    }

    get cubicFeetPerSecond(): number {
        return this.cubicMetersPerSecond * 35.314666213;
    }

    get cubicMetersPerHour(): number {
        return this.cubicMetersPerSecond * 3600.0;
    }

    get cubicMetersPerMinute(): number {
        return this.cubicMetersPerSecond * 60.0;
    }

    get millionUsGallonsPerDay(): number {
        return this.cubicMetersPerSecond * 22.824465227;
    }

    get millionCubicFeetPerDay(): number {
        return this.cubicMetersPerSecond * 3.06;
    }

    get gallonPerMinute(): number {
        return this.cubicMetersPerSecond * 15852.0;
    }

    get barrelPerDay(): number {
        return this.cubicMetersPerSecond * 543440.0;
    }

    get barrelPerMinute(): number {
        return this.cubicMetersPerSecond * 377.389;
    }

    get barrelPerHour(): number {
        return this.cubicMetersPerSecond * 22643.3;
    }

    static get Zero(): Flow {
        return new Flow(0);
    }

    public static FromCubicFeetPerMinute(cubicfeetperminute: number): Flow {
        return new Flow(cubicfeetperminute / 2118.880003);
    }

    public static FromCubicFeetPerSecond(cubicfeetpersecond: number): Flow {
        return new Flow(cubicfeetpersecond / 35.314666213);
    }

    public static FromCubicMetersPerHour(cubicmetersperhour: number): Flow {
        return new Flow(cubicmetersperhour / 3600.0);
    }

    public static FromCubicMetersPerMinute(cubicmetersperminute: number): Flow {
        return new Flow(cubicmetersperminute / 60.0);
    }

    public static FromCubicMetersPerSecond(cubicmeterspersecond: number): Flow {
        return new Flow(cubicmeterspersecond);
    }

    public static FromMillionUsGallonsPerDay(millionusgallonsperday: number): Flow {
        return new Flow(millionusgallonsperday / 22.824465227);
    }

    public static FromMillionCubicFeetPerDay(millionCubicFeetPerDay: number): Flow {
        return new Flow(millionCubicFeetPerDay / 3.06);
    }

    public static FromGallonPerMinute(gallonPerMinute: number): Flow {
        return new Flow(gallonPerMinute / 15852.0);
    }

    public static FromBarrelPerDay(barrelPerDay: number): Flow {
        return new Flow(barrelPerDay / 543440.0);
    }

    public static FromBarrelPerMinute(barrelPerMinute: number): Flow {
        return new Flow(barrelPerMinute / 377.389);
    }

    public static FromBarrelPerHour(barrelPerHour: number): Flow {
        return new Flow(barrelPerHour / 22643.3);
    }

    public static From(value: number, fromUnit: FlowUnit): Flow {
        let result: Flow;
        switch (fromUnit) {
            case FlowUnit.CubicFeetPerMinute:
                result = Flow.FromCubicFeetPerMinute(value);
                break;
            case FlowUnit.CubicFootPerSecond:
                result = Flow.FromCubicFeetPerSecond(value);
                break;
            case FlowUnit.CubicMeterPerHour:
                result = Flow.FromCubicMetersPerHour(value);
                break;
            case FlowUnit.CubicMeterPerMinute:
                result = Flow.FromCubicFeetPerMinute(value);
                break;
            case FlowUnit.CubicMeterPerSecond:
                result = Flow.FromCubicMetersPerSecond(value);
                break;
            case FlowUnit.MillionCubicFeetPerDay:
                result = Flow.FromMillionCubicFeetPerDay(value);
                break;
            case FlowUnit.MillionUsGallonsPerDay:
                result = Flow.FromMillionUsGallonsPerDay(value);
                break;
            case FlowUnit.GallonPerMinute:
                result = Flow.FromGallonPerMinute(value);
                break;
            case FlowUnit.BarrelPerDay:
                result = Flow.FromBarrelPerDay(value);
                break;
            case FlowUnit.BarrelPerMinute:
                result = Flow.FromBarrelPerMinute(value);
                break;
            case FlowUnit.BarrelPerHour:
                result = Flow.FromBarrelPerHour(value);
                break;
            default:
                throw new Error('Not Implemented');
        }
        return result;
    }

    public toString(): string {
        const flag: boolean = this.cubicMetersPerSecond === 0.0;
        let result: string;
        if (flag) {
            result = '-';
        } else {
            const flag2: boolean = UnitFormatter.UnitMode === UnitOfMeasureModes.Metric;
            result = flag2 ? UnitFormatter.getFormat(this.cubicFeetPerMinute, UnitFormatter.getVolumeFlowUnitString(FlowUnit.CubicMeterPerMinute), 2) :
                             UnitFormatter.getFormat(this.barrelPerMinute,  UnitFormatter.getVolumeFlowUnitString(FlowUnit.BarrelPerMinute), 2);
        }
        return result;
    }
}