package com.raju.portfolio;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
class PortfolioController {

	@GetMapping({"/", "/main"})
	String home() {
		return "home";
	}

	@GetMapping("/project{number:[1-7]}")
	String project(@PathVariable("number") int number) {
		return "project" + number;
	}
}
