package net.javaguides.emsback.mapper;

import net.javaguides.emsback.dto.EmployeeDto;
import net.javaguides.emsback.entity.Employee;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface EmployeeMapper {

    EmployeeMapper EMPLOYEE_MAPPER = Mappers.getMapper(EmployeeMapper.class);

    @Mapping(target = "id", source = "employee.id")
    @Mapping(target = "firstName", source = "employee.firstName")
    @Mapping(target = "lastName", source = "employee.lastName")
    @Mapping(target = "email", source = "employee.email")
    EmployeeDto employeeToEmployeeDto(Employee employee);

    @Mapping(target = "id", source = "employeeDto.id")
    @Mapping(target = "firstName", source = "employeeDto.firstName")
    @Mapping(target = "lastName", source = "employeeDto.lastName")
    @Mapping(target = "email", source = "employeeDto.email")
    Employee employeeDTOtoEmployee(EmployeeDto employeeDto);
}