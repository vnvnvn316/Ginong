package kr.co.ginong.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PopupController {

    @GetMapping("/location-pop")
    public String locationOpen (){
        return "/user/popup/location-pop";
    }


}
