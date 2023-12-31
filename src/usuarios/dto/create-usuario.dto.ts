import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo usuario no debe ser vacío' })
  @IsString({ message: 'El campo usuario debe ser de tipo cadena' })
  @MaxLength(20, {
    message: 'El campo usuario no debe ser mayor a 20 caracteres',
  })
  readonly usuario: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo email no debe ser vacio' })
  @IsEmail({}, { message: 'El campo email debe ser un email válido' })
  @MaxLength(100, {
    message: 'El campo email no debe ser mayor a 100 caracteres',
  })
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo rol no debe ser vacío' })
  @IsString({ message: 'El campo rol debe ser de tipo cadena' })
  @MaxLength(20, { message: 'El campo rol no debe ser mayor a 20 caracteres' })
  readonly rol: string;

  // @ApiProperty()
  // @IsDefined({ message: 'El campo premium debe estar definido' })
  // @IsBoolean({ message: 'El campo premium debe ser de tipo verdadero o falso' })
  // readonly premium: boolean;
}
