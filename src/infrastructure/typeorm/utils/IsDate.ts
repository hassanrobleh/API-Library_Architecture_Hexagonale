import {
    registerDecorator,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator'
import moment from 'moment'

@ValidatorConstraint({async: true})
export class IsDateContraint implements ValidatorConstraintInterface {
    validate(value: any) {
        if (typeof value === 'string') {
            return (
                /^[1-9]\d*-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(
                    value
                ) && moment(value, 'YYYY-MM-DD').isValid()
            )
        }
        return false
    }
    defaultMessage({ property }) {
        return `${property} must be a valid date (Required format: YYYY-MM-DD)`
    }
}

export function IsDateFormat() {
    return function(object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            validator: IsDateContraint
        })
    }
}
