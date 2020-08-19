import { DensityUnit, UnitOfMeasureModes } from '../helpers/UnitEnumerations';
import UnitFormatter from '../helpers/UnitFormatter';

export interface IDensity {
	kilogramsPerCubicCentimeter?: number;

	kilogramsPerCubicMeter?: number;

	kilogramsPerCubicMillimeter?: number;

	kilopoundsPerCubicFoot?: number;

	kilopoundsPerCubicInch?: number;

	poundsPerCubicFoot?: number;

	poundsPerCubicInch?: number;

	tonnesPerCubicCentimeter?: number;

	tonnesPerCubicMeter?: number;

	tonnesPerCubicMillimeter?: number;

	poundPerGallon?: number;

}

export class Density implements IDensity {
	constructor(kilogramspercubicmeter: number) {
		this.kilogramsPerCubicMeter = kilogramspercubicmeter;
	}

	public kilogramsPerCubicMeter = 0;

	get kilogramsPerCubicCentimeter(): number {
		return this.kilogramsPerCubicMeter * 1E-08;
	}

	get kilogramsPerCubicMillimeter(): number {
		return this.kilogramsPerCubicMeter * 1E-12;
	}

	get kilopoundsPerCubicFoot(): number {
		return this.kilogramsPerCubicMeter * 0.062427961 / 1000.0;
	}

	get kilopoundsPerCubicInch(): number {
		return this.kilogramsPerCubicMeter / 27679.904710191 / 1000.0;
	}

	get poundsPerCubicFoot(): number {
		return this.kilogramsPerCubicMeter * 0.062427961;
	}

	get poundsPerCubicInch(): number {
		return this.kilogramsPerCubicMeter / 27679.904710191;
	}

	get tonnesPerCubicCentimeter(): number {
		return this.kilogramsPerCubicMeter * 1E-11;
	}

	get tonnesPerCubicMeter(): number {
		return this.kilogramsPerCubicMeter * 0.001;
	}

	get tonnesPerCubicMillimeter(): number {
		return this.kilogramsPerCubicMeter * 1E-15;
	}

	get poundPerGallon(): number {
		return this.kilogramsPerCubicMeter * 0.0083454045;
	}

	static get Zero(): Density {
		return new Density(0);
	}

	public static FromKilogramsPerCubicCentimeter(kilogramspercubiccentimeter: number): Density {
		return new Density(kilogramspercubiccentimeter * 100000000.0);
	}

	public static FromKilogramsPerCubicMeter(kilogramspercubicmeter: number): Density {
		return new Density(kilogramspercubicmeter);
	}

	public static FromKilogramsPerCubicMillimeter(kilogramspercubicmillimeter: number): Density {
		return new Density(kilogramspercubicmillimeter * 1000000000000.0);
	}

	public static FromKilopoundsPerCubicFoot(kilopoundspercubicfoot: number): Density {
		return new Density(kilopoundspercubicfoot / 0.062427961 * 1000.0);
	}

	public static FromKilopoundsPerCubicInch(kilopoundspercubicinch: number): Density {
		return new Density(kilopoundspercubicinch * 27679.904710191 * 1000.0);
	}

	public static FromPoundsPerCubicFoot(poundspercubicfoot: number): Density {
		return new Density(poundspercubicfoot / 0.062427961);
	}

	public static FromPoundsPerCubicInch(poundspercubicinch: number): Density {
		return new Density(poundspercubicinch * 27679.904710191);
	}

	public static FromTonnesPerCubicCentimeter(tonnespercubiccentimeter: number): Density {
		return new Density(tonnespercubiccentimeter * 100000000000.0);
	}

	public static FromTonnesPerCubicMeter(tonnespercubicmeter: number): Density {
		return new Density(tonnespercubicmeter * 1000.0);
	}

	public static FromTonnesPerCubicMillimeter(tonnespercubicmillimeter: number): Density {
		return new Density(tonnespercubicmillimeter * 1E+15);
	}

	public static FromPoundPerGallon(poundPerGallon: number): Density {
		return new Density(poundPerGallon / 0.0083454045);
	}

	public static From(value: number, fromUnit: DensityUnit): Density {
		let result: Density;
		switch (fromUnit) {
			case DensityUnit.KilogramPerCubicCentimeter:
				result = Density.FromKilogramsPerCubicCentimeter(value);
				break;
			case DensityUnit.KilogramPerCubicMeter:
				result = Density.FromKilogramsPerCubicMeter(value);
				break;
			case DensityUnit.KilogramPerCubicMillimeter:
				result = Density.FromKilogramsPerCubicMillimeter(value);
				break;
			case DensityUnit.KilopoundPerCubicFoot:
				result = Density.FromKilopoundsPerCubicFoot(value);
				break;
			case DensityUnit.KilopoundPerCubicInch:
				result = Density.FromKilopoundsPerCubicInch(value);
				break;
			case DensityUnit.PoundPerCubicFoot:
				result = Density.FromPoundsPerCubicFoot(value);
				break;
			case DensityUnit.PoundPerCubicInch:
				result = Density.FromPoundsPerCubicInch(value);
				break;
			case DensityUnit.TonnePerCubicCentimeter:
				result = Density.FromTonnesPerCubicCentimeter(value);
				break;
			case DensityUnit.TonnePerCubicMeter:
				result = Density.FromTonnesPerCubicMeter(value);
				break;
			case DensityUnit.TonnePerCubicMillimeter:
				result = Density.FromTonnesPerCubicMillimeter(value);
				break;
			case DensityUnit.PoundPerGallon:
				result = Density.FromPoundPerGallon(value);
				break;
			default:
				throw new Error('Not Implemented');
		}
		return result;
	}

	public toString(): string {
		const flag: boolean = this.kilogramsPerCubicMeter === 0.0;
		let result: string;
		if (flag) {
			result = '-';
		} else {
			switch (+UnitFormatter.UnitMode) {
				case UnitOfMeasureModes.Standard:
					result = UnitFormatter.getFormat(this.poundPerGallon, UnitFormatter.getDensityUnitString(DensityUnit.PoundPerGallon), 2);
					break;
				case UnitOfMeasureModes.Metric:
					result = UnitFormatter.getFormat(this.kilogramsPerCubicMeter, UnitFormatter.getDensityUnitString(DensityUnit.KilogramPerCubicMeter), 2);
					break;
				case UnitOfMeasureModes.MixedStandard:
					result = UnitFormatter.getFormat(this.poundPerGallon, UnitFormatter.getDensityUnitString(DensityUnit.PoundPerGallon), 2);
					break;
				case UnitOfMeasureModes.MixedMetric:
					result = UnitFormatter.getFormat(this.kilogramsPerCubicMeter, UnitFormatter.getDensityUnitString(DensityUnit.KilogramPerCubicMeter), 2);
					break;
				default:
					result = '-';
					break;
			}
		}
		return result;
	}
}