import UnitFormatter from '../helpers/UnitFormatter';
import { RotationalSpeedUnit } from '../helpers/UnitEnumerations';

export interface IRotationalSpeed {
    revolutionsPerMinute?: number;

    revolutionsPerSecond?: number;

}

export class RotationalSpeed implements IRotationalSpeed {
    constructor(revolutionsPerSecond: number) {
        this.revolutionsPerSecond = revolutionsPerSecond;
    }

    public revolutionsPerSecond = 0;

    get revolutionsPerMinute(): number {
        return this.revolutionsPerSecond * 60.0;
    }

    static get Zero(): RotationalSpeed {
        return new RotationalSpeed(0);
    }

    public static FromRevolutionsPerMinute(revolutionsperminute: number): RotationalSpeed {
        return new RotationalSpeed(revolutionsperminute / 60.0);
    }

    public static FromRevolutionsPerSecond(revolutionspersecond: number): RotationalSpeed {
        return new RotationalSpeed(revolutionspersecond);
    }

    public static From(value: number, fromUnit: RotationalSpeedUnit): RotationalSpeed {
        let result: RotationalSpeed;
        if (fromUnit !== RotationalSpeedUnit.RevolutionPerMinute) {
            if (fromUnit !== RotationalSpeedUnit.RevolutionPerSecond) {
                throw new Error('Not Implemented');
            }
            result = RotationalSpeed.FromRevolutionsPerSecond(value);
        } else {
            result = RotationalSpeed.FromRevolutionsPerMinute(value);
        }
        return result;
    }

    public toString(): string {
        const flag: boolean = this.revolutionsPerSecond === 0.0;
        const result: string = flag ? '-' : UnitFormatter.getFormat(this.revolutionsPerMinute, UnitFormatter.getRotationalSpeedUnitString(RotationalSpeedUnit.RevolutionPerMinute), 2);
        return result;
    }
}