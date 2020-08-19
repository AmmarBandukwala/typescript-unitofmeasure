import { UnitOfMeasureModes, VolumeUnit } from '../helpers/UnitEnumerations';
import UnitFormatter from '../helpers/UnitFormatter';

export interface IVolume {
	cubicMeters?: number;

	centiliters?: number;

	cubicCentimeters?: number;

	cubicDecimeters?: number;

	cubicFeet?: number;

	cubicInches?: number;

	cubicKilometers?: number;

	cubicMiles?: number;

	cubicMillimeters?: number;

	cubicYards?: number;

	deciliters?: number;

	hectoliters?: number;

	imperialGallons?: number;

	imperialOunces?: number;

	liters?: number;

	milliliters?: number;

	tablespoons?: number;

	teaspoons?: number;

	usGallons?: number;

	usOunces?: number;

	oilBarrels?: number;

}

export class Volume implements IVolume {
	constructor(cubicmeters: number) {
		this.cubicMeters = cubicmeters;
	}

	public cubicMeters: number;

	get centiliters(): number {
		return this.cubicMeters * 1000.0 / 0.01;
	}

	get cubicCentimeters(): number {
		return this.cubicMeters * 1000000.0;
	}

	get cubicDecimeters(): number {
		return this.cubicMeters * 1000.0;
	}

	get cubicFeet(): number {
		return this.cubicMeters / 0.0283168;
	}

	get cubicInches(): number {
		return this.cubicMeters / 1.6387E-05;
	}

	get cubicKilometers(): number {
		return this.cubicMeters / 1000000000.0;
	}

	get cubicMiles(): number {
		return this.cubicMeters / 4168181830.0;
	}

	get cubicMillimeters(): number {
		return this.cubicMeters * 1000000000.0;
	}

	get cubicYards(): number {
		return this.cubicMeters / 0.764554858;
	}

	get ceciliters(): number {
		return this.cubicMeters * 1000.0 / 0.1;
	}

	get cectoliters(): number {
		return this.cubicMeters * 1000.0 / 100.0;
	}

	get cmperialGallons(): number {
		return this.cubicMeters / 0.0045460900000018145;
	}

	get cmperialOunces(): number {
		return this.cubicMeters / 2.84130624999629E-05;
	}

	get citers(): number {
		return this.cubicMeters * 1000.0;
	}

	get milliliters(): number {
		return this.cubicMeters * 1000.0 / 0.001;
	}

	get tablespoons(): number {
		return this.cubicMeters / 1.47867648E-05;
	}

	get teaspoons(): number {
		return this.cubicMeters / 4.92892159E-06;
	}

	get usGallons(): number {
		return this.cubicMeters / 0.00378541;
	}

	get usOunces(): number {
		return this.cubicMeters / 2.9573529562537606E-05;
	}

	get oilBarrels(): number {
		return this.cubicMeters * 6.2898105697751;
	}

	static get Zero(): Volume {
		return new Volume(0);
	}

	public static FromCentiliters(centiliters: number): Volume {
		return new Volume(centiliters / 1000.0 * 0.01);
	}

	public static FromCubicCentimeters(cubiccentimeters: number): Volume {
		return new Volume(cubiccentimeters / 1000000.0);
	}

	public static FromCubicDecimeters(cubicdecimeters: number): Volume {
		return new Volume(cubicdecimeters / 1000.0);
	}

	public static FromCubicFeet(cubicfeet: number): Volume {
		return new Volume(cubicfeet * 0.0283168);
	}

	public static FromCubicInches(cubicinches: number): Volume {
		return new Volume(cubicinches * 1.6387 * 1E-05);
	}

	public static FromCubicKilometers(cubickilometers: number): Volume {
		return new Volume(cubickilometers * 1000000000.0);
	}

	public static FromCubicMeters(cubicmeters: number): Volume {
		return new Volume(cubicmeters);
	}

	public static FromCubicMiles(cubicmiles: number): Volume {
		return new Volume(cubicmiles * 4.16818183 * 1000000000.0);
	}

	public static FromCubicMillimeters(cubicmillimeters: number): Volume {
		return new Volume(cubicmillimeters / 1000000000.0);
	}

	public static FromCubicYards(cubicyards: number): Volume {
		return new Volume(cubicyards * 0.764554858);
	}

	public static FromDeciliters(deciliters: number): Volume {
		return new Volume(deciliters / 1000.0 * 0.1);
	}

	public static FromHectoliters(hectoliters: number): Volume {
		return new Volume(hectoliters / 1000.0 * 100.0);
	}

	public static FromImperialGallons(imperialgallons: number): Volume {
		return new Volume(imperialgallons * 0.0045460900000018145);
	}

	public static FromImperialOunces(imperialounces: number): Volume {
		return new Volume(imperialounces * 2.84130624999629E-05);
	}

	public static FromLiters(liters: number): Volume {
		return new Volume(liters / 1000.0);
	}

	public static FromMilliliters(milliliters: number): Volume {
		return new Volume(milliliters / 1000.0 * 0.001);
	}

	public static FromTablespoons(tablespoons: number): Volume {
		return new Volume(tablespoons * 1.47867648E-05);
	}

	public static FromTeaspoons(teaspoons: number): Volume {
		return new Volume(teaspoons * 4.92892159E-06);
	}

	public static FromUsGallons(usgallons: number): Volume {
		return new Volume(usgallons * 0.00378541);
	}

	public static FromUsOunces(usounces: number): Volume {
		return new Volume(usounces * 2.9573529562537606E-05);
	}

	public static FromOilBarrels(oilBarrels: number): Volume {
		return new Volume(oilBarrels / 6.2898105697751);
	}

	public static From(value: number, fromUnit: VolumeUnit): Volume {
		let result: Volume;
		switch (fromUnit) {
			case VolumeUnit.Centiliter:
				result = Volume.FromCentiliters(value);
				break;
			case VolumeUnit.CubicCentimeter:
				result = Volume.FromCubicCentimeters(value);
				break;
			case VolumeUnit.CubicDecimeter:
				result = Volume.FromCubicDecimeters(value);
				break;
			case VolumeUnit.CubicFoot:
				result = Volume.FromCubicFeet(value);
				break;
			case VolumeUnit.CubicInch:
				result = Volume.FromCubicInches(value);
				break;
			case VolumeUnit.CubicKilometer:
				result = Volume.FromCubicKilometers(value);
				break;
			case VolumeUnit.CubicMeter:
				result = Volume.FromCubicMeters(value);
				break;
			case VolumeUnit.CubicMile:
				result = Volume.FromCubicMiles(value);
				break;
			case VolumeUnit.CubicMillimeter:
				result = Volume.FromCubicMillimeters(value);
				break;
			case VolumeUnit.CubicYard:
				result = Volume.FromCubicYards(value);
				break;
			case VolumeUnit.Deciliter:
				result = Volume.FromDeciliters(value);
				break;
			case VolumeUnit.Hectoliter:
				result = Volume.FromHectoliters(value);
				break;
			case VolumeUnit.ImperialGallon:
				result = Volume.FromImperialGallons(value);
				break;
			case VolumeUnit.ImperialOunce:
				result = Volume.FromImperialOunces(value);
				break;
			case VolumeUnit.Liter:
				result = Volume.FromLiters(value);
				break;
			case VolumeUnit.Milliliter:
				result = Volume.FromMilliliters(value);
				break;
			case VolumeUnit.Tablespoon:
				result = Volume.FromTablespoons(value);
				break;
			case VolumeUnit.Teaspoon:
				result = Volume.FromTeaspoons(value);
				break;
			case VolumeUnit.UsGallon:
				result = Volume.FromUsGallons(value);
				break;
			case VolumeUnit.UsOunce:
				result = Volume.FromUsOunces(value);
				break;
			case VolumeUnit.OilBarrel:
				result = Volume.FromOilBarrels(value);
				break;
			default:
				throw new Error('Not Implemented');
		}
		return result;
	}

	public toString(): string {
		const flag: boolean = this.cubicMeters === 0.0;
		let result: string;
		if (flag) {
			result = '-';
		} else {
			switch (+UnitFormatter.UnitMode) {
				case UnitOfMeasureModes.Standard:
					result = UnitFormatter.getFormat(this.oilBarrels, UnitFormatter.getVolumeUnitString(VolumeUnit.OilBarrel), 4);
					break;
				case UnitOfMeasureModes.Metric:
					result = UnitFormatter.getFormat(this.cubicMeters, UnitFormatter.getVolumeUnitString(VolumeUnit.CubicMeter), 4);
					break;
				case UnitOfMeasureModes.MixedStandard:
					result = UnitFormatter.getFormat(this.oilBarrels, UnitFormatter.getVolumeUnitString(VolumeUnit.OilBarrel), 4);
					break;
				case UnitOfMeasureModes.MixedMetric:
					result = UnitFormatter.getFormat(this.cubicMeters, UnitFormatter.getVolumeUnitString(VolumeUnit.CubicMeter), 4);
					break;
				default:
					result = '-';
					break;
			}
		}
		return result;
	}
}