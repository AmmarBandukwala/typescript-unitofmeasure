



<p align="right">
	<a href="https://github.com/AmmarBandukwala/typescript-unitofmeasure/blob/master/LICENSE"><img src="https://img.shields.io/github/license/AmmarBandukwala/typescript-unitofmeasure?style=flat-square" alt="License"></a>
</p>

# TypeScript Unit of Measure Library

TypeScript Unit of Measure is a robust and extensible library designed to facilitate type-safe unit conversions and calculations in TypeScript and JavaScript applications. Inspired by the [UNITS.NET](https://github.com/angularsen/UnitsNet) NuGet package, this library provides a comprehensive suite of classes and utilities for working with physical quantities and their associated units.

## Key Features

- **Type-Safe Unit Classes:** Strongly-typed representations for common physical quantities, including Angle, Density, Flow, Force, Length, Pressure, Rotational Speed, Speed, Temperature, and Volume.
- **Comprehensive Unit Conversion:** Seamlessly convert between supported units for each quantity, ensuring accuracy and consistency.
- **Flexible String Formatting:** Built-in helpers for formatting unit values for display, logging, or reporting.
- **Extensibility:** Easily extend the library to support additional units or custom physical quantities as required by your application.

## Getting Started

### Installation

Clone the repository and install the required dependencies:

```sh
git clone https://github.com/AmmarBandukwala/typescript-unitofmeasure.git
cd typescript-unitofmeasure
npm install
```

### Basic Usage

Below is a simple example demonstrating how to instantiate and use unit classes:

```typescript
import { Angle } from "./src/units/Angle";
import UnitFormatter from "./src/helpers/UnitFormatter";

// Create an Angle instance (default unit: degrees)
const angle = new Angle(10);
console.log(`Radians: ${angle.radians}`); // Convert 10 degrees to radians

// Instantiate from a specific unit
const angle2 = Angle.FromRadians(1.57);
console.log(`Degrees: ${angle2.degrees}`); // Convert back to degrees

// Format output with specified precision and unit abbreviation
console.log(UnitFormatter.getFormat(angle2.degrees, "deg", 2));
```

## Supported Units

The following physical quantities and their units are currently supported:

- Angle
- Density
- Flow
- Force
- Length
- Pressure
- Rotational Speed
- Speed
- Temperature
- Volume

## Project Structure

- `src/units/` – Contains unit classes for each supported physical quantity
- `src/helpers/UnitEnumerations.ts` – Enumerations defining all available units
- `src/helpers/UnitFormatter.ts` – Utility for formatting unit values as strings
- `test/` – Comprehensive test suites using Mocha and Chai

## Running Tests

To execute the test suite and verify library functionality, run:

```sh
npm test
```

## Contributing

Contributions are highly encouraged. If you wish to report a bug, request a feature, or submit a pull request, please adhere to the following guidelines:

- Ensure your code follows the existing style and conventions
- Include relevant tests for new features or bug fixes
- Update documentation as appropriate

For major changes, please open an issue first to discuss your proposed modifications.

## License

This project is licensed under the MIT License.
