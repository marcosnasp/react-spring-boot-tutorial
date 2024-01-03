package net.javaguides.emsback.service;

import net.javaguides.emsback.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long id);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long idEmployee, EmployeeDto employeeDto);

    void deleteEmployee(Long id);

}
