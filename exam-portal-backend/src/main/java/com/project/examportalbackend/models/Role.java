package com.project.examportalbackend.models;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@NoArgsConstructor

@ToString
@Setter
@Getter
@Builder
@AllArgsConstructor
@Entity
@Table(name = "roles")
public class Role {

    @Id
    @Column(name="role_name")
    private String roleName;

    @Column(name="role_description")
    private String roleDescription;


}
