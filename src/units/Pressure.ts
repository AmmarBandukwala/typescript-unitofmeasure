import { UnitOfMeasureModes, PressureUnit } from '../helpers/UnitEnumerations';
import UnitFormatter from '../helpers/UnitFormatter';

export interface IPressure {
	pascals?: number;

	atmospheres?: number;

	bars?: number;

	centibars?: number;

	decapascals?: number;

	decibars?: number;

	gigapascals?: number;

	hectopascals?: number;

	kilobars?: number;

	kilogramsForcePerSquareCentimeter?: number;

	kilogramsForcePerSquareMeter?: number;

	kilogramsForcePerSquareMillimeter?: number;

	kilonewtonsPerSquareCentimeter?: number;

	kilonewtonsPerSquareMeter?: number;

	kilonewtonsPerSquareMillimeter?: number;

	kilopascals?: number;

	kilopoundsForcePerSquareFoot?: number;

	kilopoundsForcePerSquareInch?: number;

	megabars?: number;

	megapascals?: number;

	micropascals?: number;

	millibars?: number;

	newtonsPerSquareCentimeter?: number;

	newtonsPerSquareMeter?: number;

	newtonsPerSquareMillimeter?: number;

	poundsForcePerSquareFoot?: number;

	poundsForcePerSquareInch?: number;

	psi?: number;

	technicalAtmospheres?: number;

	tonnesForcePerSquareCentimeter?: number;

	tonnesForcePerSquareMeter?: number;

	tonnesForcePerSquareMillimeter?: number;

	torrs?: number;

	inchOfWater?: number;

}

export class Pressure implements IPressure {
	constructor(pascals: number) {
		this.pascals = pascals;
	}

	public pascals = 0;

	get atmospheres(): number {
		return this.pascals / 101325.0;
	}

	get bars(): number {
		return this.pascals / 100000.0;
	}

	get centibars(): number {
		return this.pascals / 100000.0 / 0.01;
	}

	get decapascals(): number {
		return this.pascals / 10.0;
	}

	get decibars(): number {
		return this.pascals / 100000.0 / 0.1;
	}

	get gigapascals(): number {
		return this.pascals / 1000000000.0;
	}

	get hectopascals(): number {
		return this.pascals / 100.0;
	}

	get kilobars(): number {
		return this.pascals / 100000.0 / 1000.0;
	}

	get kilogramsForcePerSquareCentimeter(): number {
		return this.pascals / 98066.5;
	}

	get kilogramsForcePerSquareMeter(): number {
		return this.pascals * 0.101971619222242;
	}

	get kilogramsForcePerSquareMillimeter(): number {
		return this.pascals * 1.01971619222242E-07;
	}

	get kilonewtonsPerSquareCentimeter(): number {
		return this.pascals / 10000.0 / 1000.0;
	}

	get kilonewtonsPerSquareMeter(): number {
		return this.pascals / 1000.0;
	}

	get kilonewtonsPerSquareMillimeter(): number {
		return this.pascals / 1000000.0 / 1000.0;
	}

	get kilopascals(): number {
		return this.pascals / 1000.0;
	}

	get kilopoundsForcePerSquareFoot(): number {
		return this.pascals * 0.020885432426709 / 1000.0;
	}

	get kilopoundsForcePerSquareInch(): number {
		return this.pascals * 0.000145037725185479 / 1000.0;
	}

	get megabars(): number {
		return this.pascals / 100000.0 / 1000000.0;
	}

	get megapascals(): number {
		return this.pascals / 1000000.0;
	}

	get micropascals(): number {
		return this.pascals / 1E-06;
	}

	get millibars(): number {
		return this.pascals / 100000.0 / 0.001;
	}

	get newtonsPerSquareCentimeter(): number {
		return this.pascals / 10000.0;
	}

	get newtonsPerSquareMeter(): number {
		return this.pascals;
	}

	get newtonsPerSquareMillimeter(): number {
		return this.pascals / 1000000.0;
	}

	get poundsForcePerSquareFoot(): number {
		return this.pascals * 0.020885432426709;
	}

	get poundsForcePerSquareInch(): number {
		return this.pascals * 0.000145037725185479;
	}

	get psi(): number {
		return this.pascals / 6894.76;
	}

	get technicalAtmospheres(): number {
		return this.pascals / 98068.0592331;
	}

	get tonnesForcePerSquareCentimeter(): number {
		return this.pascals * 1.01971619222242E-08;
	}

	get tonnesForcePerSquareMeter(): number {
		return this.pascals * 0.000101971619222242;
	}

	get tonnesForcePerSquareMillimeter(): number {
		return this.pascals * 1.01971619222242E-10;
	}

	get torrs(): number {
		return this.pascals / 133.32266751999998;
	}

	get inchOfWater(): number {
		return this.pascals / 248.8399;
	}

	static get Zero(): Pressure {
		return new Pressure(0);
	}

	public static FromAtmospheres(atmospheres: number): Pressure {
		return new Pressure(atmospheres * 1.01325 * 100000.0);
	}

	public static FromBars(bars: number): Pressure {
		return new Pressure(bars * 100000.0);
	}

	public static FromCentibars(centibars: number): Pressure {
		return new Pressure(centibars * 100000.0 * 0.01);
	}

	public static FromDecapascals(decapascals: number): Pressure {
		return new Pressure(decapascals * 10.0);
	}

	public static FromDecibars(decibars: number): Pressure {
		return new Pressure(decibars * 100000.0 * 0.1);
	}

	public static FromGigapascals(gigapascals: number): Pressure {
		return new Pressure(gigapascals * 1000000000.0);
	}

	public static FromHectopascals(hectopascals: number): Pressure {
		return new Pressure(hectopascals * 100.0);
	}

	public static FromKilobars(kilobars: number): Pressure {
		return new Pressure(kilobars * 100000.0 * 1000.0);
	}

	public static FromKilogramsForcePerSquareCentimeter(kilogramsforcepersquarecentimeter: number): Pressure {
		return new Pressure(kilogramsforcepersquarecentimeter * 9.80665 * 10000.0);
	}

	public static FromKilogramsForcePerSquareMeter(kilogramsforcepersquaremeter: number): Pressure {
		return new Pressure(kilogramsforcepersquaremeter * 9.80665019960652);
	}

	public static FromKilogramsForcePerSquareMillimeter(kilogramsforcepersquaremillimeter: number): Pressure {
		return new Pressure(kilogramsforcepersquaremillimeter * 9806650.19960652);
	}

	public static FromKilonewtonsPerSquareCentimeter(kilonewtonspersquarecentimeter: number): Pressure {
		return new Pressure(kilonewtonspersquarecentimeter * 10000.0 * 1000.0);
	}

	public static FromKilonewtonsPerSquareMeter(kilonewtonspersquaremeter: number): Pressure {
		return new Pressure(kilonewtonspersquaremeter * 1000.0);
	}

	public static FromKilonewtonsPerSquareMillimeter(kilonewtonspersquaremillimeter: number): Pressure {
		return new Pressure(kilonewtonspersquaremillimeter * 1000000.0 * 1000.0);
	}

	public static FromKilopascals(kilopascals: number): Pressure {
		return new Pressure(kilopascals * 1000.0);
	}

	public static FromKilopoundsForcePerSquareFoot(kilopoundsforcepersquarefoot: number): Pressure {
		return new Pressure(kilopoundsforcepersquarefoot * 47.8802631216372 * 1000.0);
	}

	public static FromKilopoundsForcePerSquareInch(kilopoundsforcepersquareinch: number): Pressure {
		return new Pressure(kilopoundsforcepersquareinch * 6894.75788951576 * 1000.0);
	}

	public static FromMegabars(megabars: number): Pressure {
		return new Pressure(megabars * 100000.0 * 1000000.0);
	}

	public static FromMegapascals(megapascals: number): Pressure {
		return new Pressure(megapascals * 1000000.0);
	}

	public static FromMicropascals(micropascals: number): Pressure {
		return new Pressure(micropascals * 1E-06);
	}

	public static FromMillibars(millibars: number): Pressure {
		return new Pressure(millibars * 100000.0 * 0.001);
	}

	public static FromNewtonsPerSquareCentimeter(newtonspersquarecentimeter: number): Pressure {
		return new Pressure(newtonspersquarecentimeter * 10000.0);
	}

	public static FromNewtonsPerSquareMeter(newtonspersquaremeter: number): Pressure {
		return new Pressure(newtonspersquaremeter);
	}

	public static FromNewtonsPerSquareMillimeter(newtonspersquaremillimeter: number): Pressure {
		return new Pressure(newtonspersquaremillimeter * 1000000.0);
	}

	public static FromPascals(pascals: number): Pressure {
		return new Pressure(pascals);
	}

	public static FromPoundsForcePerSquareFoot(poundsforcepersquarefoot: number): Pressure {
		return new Pressure(poundsforcepersquarefoot * 47.8802631216372);
	}

	public static FromPoundsForcePerSquareInch(poundsforcepersquareinch: number): Pressure {
		return new Pressure(poundsforcepersquareinch * 6894.75788951576);
	}

	public static FromPsi(psi: number): Pressure {
		return new Pressure(psi * 6894.76);
	}

	public static FromTechnicalAtmospheres(technicalatmospheres: number): Pressure {
		return new Pressure(technicalatmospheres * 9.80680592331 * 10000.0);
	}

	public static FromTonnesForcePerSquareCentimeter(tonnesforcepersquarecentimeter: number): Pressure {
		return new Pressure(tonnesforcepersquarecentimeter * 98066501.9960652);
	}

	public static FromTonnesForcePerSquareMeter(tonnesforcepersquaremeter: number): Pressure {
		return new Pressure(tonnesforcepersquaremeter * 9806.65019960653);
	}

	public static FromTonnesForcePerSquareMillimeter(tonnesforcepersquaremillimeter: number): Pressure {
		return new Pressure(tonnesforcepersquaremillimeter * 9806650199.60653);
	}

	public static FromTorrs(torrs: number): Pressure {
		return new Pressure(torrs * 1.3332266752 * 100.0);
	}

	public static FromInchOfWater(inH20: number): Pressure {
		return new Pressure(inH20 * 248.8399);
	}

	public static From(value: number, fromUnit: PressureUnit): Pressure {
		let result: Pressure;
		switch (fromUnit) {
			case PressureUnit.Atmosphere:
				result = Pressure.FromAtmospheres(value);
				break;
			case PressureUnit.Bar:
				result = Pressure.FromBars(value);
				break;
			case PressureUnit.Centibar:
				result = Pressure.FromCentibars(value);
				break;
			case PressureUnit.Decapascal:
				result = Pressure.FromDecapascals(value);
				break;
			case PressureUnit.Decibar:
				result = Pressure.FromDecibars(value);
				break;
			case PressureUnit.Gigapascal:
				result = Pressure.FromGigapascals(value);
				break;
			case PressureUnit.Hectopascal:
				result = Pressure.FromHectopascals(value);
				break;
			case PressureUnit.Kilobar:
				result = Pressure.FromKilobars(value);
				break;
			case PressureUnit.KilogramForcePerSquareCentimeter:
				result = Pressure.FromKilogramsForcePerSquareCentimeter(value);
				break;
			case PressureUnit.KilogramForcePerSquareMeter:
				result = Pressure.FromKilogramsForcePerSquareMeter(value);
				break;
			case PressureUnit.KilogramForcePerSquareMillimeter:
				result = Pressure.FromKilogramsForcePerSquareMillimeter(value);
				break;
			case PressureUnit.KilonewtonPerSquareCentimeter:
				result = Pressure.FromKilonewtonsPerSquareCentimeter(value);
				break;
			case PressureUnit.KilonewtonPerSquareMeter:
				result = Pressure.FromKilonewtonsPerSquareMeter(value);
				break;
			case PressureUnit.KilonewtonPerSquareMillimeter:
				result = Pressure.FromKilonewtonsPerSquareMillimeter(value);
				break;
			case PressureUnit.Kilopascal:
				result = Pressure.FromKilopascals(value);
				break;
			case PressureUnit.KilopoundForcePerSquareFoot:
				result = Pressure.FromKilopoundsForcePerSquareFoot(value);
				break;
			case PressureUnit.KilopoundForcePerSquareInch:
				result = Pressure.FromKilopoundsForcePerSquareInch(value);
				break;
			case PressureUnit.Megabar:
				result = Pressure.FromMegabars(value);
				break;
			case PressureUnit.Megapascal:
				result = Pressure.FromMegapascals(value);
				break;
			case PressureUnit.Micropascal:
				result = Pressure.FromMicropascals(value);
				break;
			case PressureUnit.Millibar:
				result = Pressure.FromMillibars(value);
				break;
			case PressureUnit.NewtonPerSquareCentimeter:
				result = Pressure.FromNewtonsPerSquareCentimeter(value);
				break;
			case PressureUnit.NewtonPerSquareMeter:
				result = Pressure.FromNewtonsPerSquareMeter(value);
				break;
			case PressureUnit.NewtonPerSquareMillimeter:
				result = Pressure.FromNewtonsPerSquareMillimeter(value);
				break;
			case PressureUnit.Pascal:
				result = Pressure.FromPascals(value);
				break;
			case PressureUnit.PoundForcePerSquareFoot:
				result = Pressure.FromPoundsForcePerSquareFoot(value);
				break;
			case PressureUnit.PoundForcePerSquareInch:
				result = Pressure.FromPoundsForcePerSquareInch(value);
				break;
			case PressureUnit.Psi:
				result = Pressure.FromPsi(value);
				break;
			case PressureUnit.TechnicalAtmosphere:
				result = Pressure.FromTechnicalAtmospheres(value);
				break;
			case PressureUnit.TonneForcePerSquareCentimeter:
				result = Pressure.FromTonnesForcePerSquareCentimeter(value);
				break;
			case PressureUnit.TonneForcePerSquareMeter:
				result = Pressure.FromTonnesForcePerSquareMeter(value);
				break;
			case PressureUnit.TonneForcePerSquareMillimeter:
				result = Pressure.FromTonnesForcePerSquareMillimeter(value);
				break;
			case PressureUnit.Torr:
				result = Pressure.FromTorrs(value);
				break;
			case PressureUnit.InchOfWater:
				result = Pressure.FromInchOfWater(value);
				break;
			default:
				throw new Error('Not Implemented');
		}
		return result;
	}

	public toString(): string {
		const flag: boolean = this.pascals === 0.0;
		let result: string;
		if (flag) {
			result = '-';
		} else {
			switch (+UnitFormatter.UnitMode) {
				case UnitOfMeasureModes.Standard:
					result = UnitFormatter.getFormat(this.psi, UnitFormatter.getPressureUnitString(PressureUnit.Psi), 2);
					break;
				case UnitOfMeasureModes.Metric:
					result = UnitFormatter.getFormat(this.kilopascals, UnitFormatter.getPressureUnitString(PressureUnit.Kilopascal), 2);
					break;
				case UnitOfMeasureModes.MixedStandard:
					result = UnitFormatter.getFormat(this.psi, UnitFormatter.getPressureUnitString(PressureUnit.Psi), 2);
					break;
				case UnitOfMeasureModes.MixedMetric:
					result = UnitFormatter.getFormat(this.kilopascals, UnitFormatter.getPressureUnitString(PressureUnit.Kilopascal), 2);
					break;
				default:
					result = '-';
					break;
			}
		}
		return result;
	}
}