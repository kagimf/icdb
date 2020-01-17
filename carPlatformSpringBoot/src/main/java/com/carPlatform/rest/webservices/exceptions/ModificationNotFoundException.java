package com.carPlatform.rest.webservices.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ModificationNotFoundException extends RuntimeException {
	public ModificationNotFoundException(String arg0) {
		super(arg0);
	}
}
