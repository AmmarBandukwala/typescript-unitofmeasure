import { UnitOfMeasureModes, ForceUnit } from '../helpers/UnitEnumerations';
import UnitFormatter from '../helpers/UnitFormatter';

export interface IForce {
	dyne?: number;

	kilogramsForce?: number;

	kilonewtons?: number;

	kiloPonds?: number;

	newtons?: number;

	poundals?: number;

	poundsForce?: number;

	tonnesForce?: number;

}

export class Force implements IForce {
	constructor(newtons: number) {
		this._newtons = newtons;
	}

	public _newtons = 0;

	get dyne(): number {
		return this._newtons * 100000.0;
	}

	get kilogramsForce(): number {
		return this._newtons / 9.80665002864;
	}

	get kilonewtons(): number {
		return this._newtons / 1000.0;
	}

	get kiloPonds(): number {
		return this._newtons / 9.80665002864;
	}

	get poundals(): number {
		return this._newtons / 0.13825502798973041;
	}

	get poundsForce(): number {
		return this._newtons / 4.4482216152605094;
	}

	get tonnesForce(): number {
		return this._newtons / 9.80665002864 / 1000.0;
	}

	static get Zero(): Force {
		return new Force(0);
	}

	public static FromDyne(dyne: number): Force {
		return new Force(dyne / 100000.0);
	}

	public static FromKilogramsForce(kilogramsforce: number): Force {
		return new Force(kilogramsforce * 9.80665002864);
	}

	public static FromKilonewtons(kilonewtons: number): Force {
		return new Force(kilonewtons * 1000.0);
	}

	public static FromKiloPonds(kiloponds: number): Force {
		return new Force(kiloponds * 9.80665002864);
	}

	public static FromNewtons(newtons: number): Force {
		return new Force(newtons);
	}

	public static FromPoundals(poundals: number): Force {
		return new Force(poundals * 0.13825502798973041);
	}

	public static FromPoundsForce(poundsforce: number): Force {
		return new Force(poundsforce * 4.4482216152605094);
	}

	public static FromTonnesForce(tonnesforce: number): Force {
		return new Force(tonnesforce * 9.80665002864 * 1000.0);
	}

	public static From(value: number, fromUnit: ForceUnit): Force {
		let result: Force;
		switch (fromUnit) {
			case ForceUnit.Dyn:
				result = Force.FromDyne(value);
				break;
			case ForceUnit.KilogramForce:
				result = Force.FromKilogramsForce(value);
				break;
			case ForceUnit.Kilonewton:
				result = Force.FromKilonewtons(value);
				break;
			case ForceUnit.KiloPond:
				result = Force.FromKiloPonds(value);
				break;
			case ForceUnit.Newton:
				result = Force.FromNewtons(value);
				break;
			case ForceUnit.Poundal:
				result = Force.FromPoundals(value);
				break;
			case ForceUnit.PoundForce:
				result = Force.FromPoundsForce(value);
				break;
			case ForceUnit.TonneForce:
				result = Force.FromTonnesForce(value);
				break;
			default:
				throw new Error('Not Implemented');
		}
		return result;
	}

	public toString(): string {
		const flag: boolean = this._newtons === 0.0;
		let result: string;
		if (flag) {
			result = '-';
		} else {
			switch (+UnitFormatter.UnitMode) {
				case UnitOfMeasureModes.Standard:
					result = UnitFormatter.getFormat(this.poundsForce, UnitFormatter.getForceUnitString(ForceUnit.PoundForce), 2);
					break;
				case UnitOfMeasureModes.Metric:
					result = UnitFormatter.getFormat(this.kilogramsForce, UnitFormatter.getForceUnitString(ForceUnit.KilogramForce), 2);
					break;
				case UnitOfMeasureModes.MixedStandard:
					result = UnitFormatter.getFormat(this.poundsForce, UnitFormatter.getForceUnitString(ForceUnit.PoundForce), 2);
					break;
				case UnitOfMeasureModes.MixedMetric:
					result = UnitFormatter.getFormat(this.kilogramsForce, UnitFormatter.getForceUnitString(ForceUnit.KilogramForce), 2);
					break;
				default:
					result = '-';
					break;
			}
		}
		return result;
	}
}