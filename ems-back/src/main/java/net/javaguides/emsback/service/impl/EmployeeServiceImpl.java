package net.javaguides.emsback.service.impl;


import net.javaguides.emsback.dto.EmployeeDto;
import net.javaguides.emsback.entity.Employee;
import net.javaguides.emsback.exception.ResourceNotFoundException;
import net.javaguides.emsback.mapper.EmployeeMapper;
import net.javaguides.emsback.repository.EmployeeRepository;
import net.javaguides.emsback.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.EMPLOYEE_MAPPER.employeeDTOtoEmployee(employeeDto);
        Employee employeeSaved = employeeRepository.save(employee);
        return EmployeeMapper.EMPLOYEE_MAPPER.employeeToEmployeeDto(employeeSaved);
    }

    @Override
    public EmployeeDto getEmployeeById(Long id) {
        Employee employee =
                employeeRepository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(String.format("Employee with the given %d does not exists.", id)));
        return EmployeeMapper.EMPLOYEE_MAPPER.employeeToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream()
                .map(EmployeeMapper.EMPLOYEE_MAPPER::employeeToEmployeeDto)
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long idEmployee, EmployeeDto employeeDto) {
        Employee employee = employeeRepository.findById(idEmployee)
                .orElseThrow(() -> new ResourceNotFoundException(String.format("""
                        Update Operation cannot be completed. Employee with the id %d not exists.""", idEmployee)));
        employee.setFirstName(employeeDto.firstName());
        employee.setLastName(employeeDto.lastName());
        employee.setEmail(employeeDto.email());
        return EmployeeMapper.EMPLOYEE_MAPPER.employeeToEmployeeDto(employeeRepository.save(employee));
    }

    @Override
    public void deleteEmployee(Long id) {
        if (employeeRepository.existsById(id)) {
            employeeRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException(String.format("""
                    Delete Operation cannot be completed. Employee with id %d not exists.""", id));
        }
    }
}
