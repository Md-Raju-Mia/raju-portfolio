package com.raju.portfolio;

import org.springframework.stereotype.Controller;
import org.springframework.http.HttpStatus;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.server.ResponseStatusException;

@Controller
class PortfolioController {

	@GetMapping({"/", "/main"})
	String home(Model model) {
		model.addAttribute("projects", MobileProject.ALL);
		return "home";
	}

	@GetMapping("/work/{slug}")
	String mobileProject(@PathVariable("slug") String slug, Model model) {
		MobileProject project = MobileProject.ALL.stream()
			.filter(item -> item.slug().equals(slug))
			.findFirst()
			.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
		model.addAttribute("project", project);
		return "mobile-project";
	}

	@GetMapping("/work/lunacar")
	String fuelPumpProject() {
		return "redirect:/work/ble-fuel-pump";
	}

	@GetMapping("/project{number:[1-7]}")
	String project(@PathVariable("number") int number) {
		return "project" + number;
	}

	@GetMapping("/archive")
	String archive() {
		return "archive";
	}
}
