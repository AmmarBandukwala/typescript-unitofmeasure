import { TemperatureUnit, UnitOfMeasureModes } from '../helpers/UnitEnumerations';
import UnitFormatter from '../helpers/UnitFormatter';

export interface ITemperature {
	degreesCelsius?: number;

	degreesDelisle?: number;

	degreesFahrenheit?: number;

	degreesNewton?: number;

	degreesRankine?: number;

	degreesReaumur?: number;

	degreesRoemer?: number;

	kelvins?: number;

}

export class Temperature implements ITemperature {
	constructor(kelvins: number) {
		this.kelvins = kelvins;
	}

	public kelvins = 0;

	get degreesCelsius(): number {
		return this.kelvins - 273.15;
	}

	get degreesDelisle(): number {
		return (this.kelvins - 373.15) * -3.0 / 2.0;
	}

	get degreesFahrenheit(): number {
		return (this.kelvins - 255.37222222222221) * 9.0 / 5.0;
	}

	get degreesNewton(): number {
		return (this.kelvins - 273.15) * 33.0 / 100.0;
	}

	get degreesRankine(): number {
		return this.kelvins * 9.0 / 5.0;
	}

	get degreesReaumur(): number {
		return (this.kelvins - 273.15) * 4.0 / 5.0;
	}

	get degreesRoemer(): number {
		return (this.kelvins - 258.8642857142857) * 21.0 / 40.0;
	}

	static get Zero(): Temperature {
		return new Temperature(0);
	}

	public static FromDegreesCelsius(degreescelsius: number): Temperature {
		return new Temperature(degreescelsius + 273.15);
	}

	public static FromDegreesDelisle(degreesdelisle: number): Temperature {
		return new Temperature(degreesdelisle * -2.0 / 3.0 + 373.15);
	}

	public static FromDegreesFahrenheit(degreesfahrenheit: number): Temperature {
		return new Temperature(degreesfahrenheit * 5.0 / 9.0 + 255.37222222222221);
	}

	public static FromDegreesNewton(degreesnewton: number): Temperature {
		return new Temperature(degreesnewton * 100.0 / 33.0 + 273.15);
	}

	public static FromDegreesRankine(degreesrankine: number): Temperature {
		return new Temperature(degreesrankine * 5.0 / 9.0);
	}

	public static FromDegreesReaumur(degreesreaumur: number): Temperature {
		return new Temperature(degreesreaumur * 5.0 / 4.0 + 273.15);
	}

	public static FromDegreesRoemer(degreesroemer: number): Temperature {
		return new Temperature(degreesroemer * 40.0 / 21.0 + 273.15 - 14.285714285714286);
	}

	public static FromKelvins(kelvins: number): Temperature {
		return new Temperature(kelvins);
	}

	public static From(value: number, fromUnit: TemperatureUnit): Temperature {
		let result: Temperature;
		switch (fromUnit) {
			case TemperatureUnit.DegreeCelsius:
				result = Temperature.FromDegreesCelsius(value);
				break;
			case TemperatureUnit.DegreeDelisle:
				result = Temperature.FromDegreesDelisle(value);
				break;
			case TemperatureUnit.DegreeFahrenheit:
				result = Temperature.FromDegreesFahrenheit(value);
				break;
			case TemperatureUnit.DegreeNewton:
				result = Temperature.FromDegreesNewton(value);
				break;
			case TemperatureUnit.DegreeRankine:
				result = Temperature.FromDegreesRankine(value);
				break;
			case TemperatureUnit.DegreeReaumur:
				result = Temperature.FromDegreesReaumur(value);
				break;
			case TemperatureUnit.DegreeRoemer:
				result = Temperature.FromDegreesRoemer(value);
				break;
			case TemperatureUnit.Kelvin:
				result = Temperature.FromKelvins(value);
				break;
			default:
				throw new Error('Not Implemented');
		}
		return result;
	}

	public toString(): string {
		const flag: boolean = this.kelvins === 0.0;
		let result: string;
		if (flag) {
			result = '-';
		} else {
			switch (+UnitFormatter.UnitMode) {
				case UnitOfMeasureModes.Standard:
					result = UnitFormatter.getFormat(this.degreesFahrenheit, UnitFormatter.getTemperatureUnitString(TemperatureUnit.DegreeFahrenheit), 2);
					break;
				case UnitOfMeasureModes.Metric:
					result = UnitFormatter.getFormat(this.degreesCelsius, UnitFormatter.getTemperatureUnitString(TemperatureUnit.DegreeCelsius), 2);
					break;
				case UnitOfMeasureModes.MixedStandard:
					result = UnitFormatter.getFormat(this.degreesFahrenheit, UnitFormatter.getTemperatureUnitString(TemperatureUnit.DegreeFahrenheit), 2);
					break;
				case UnitOfMeasureModes.MixedMetric:
					result = UnitFormatter.getFormat(this.degreesCelsius, UnitFormatter.getTemperatureUnitString(TemperatureUnit.DegreeCelsius), 2);
					break;
				default:
					result = '-';
					break;
			}
		}
		return result;
	}
}