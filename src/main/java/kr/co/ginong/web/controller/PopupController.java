package kr.co.ginong.web.controller;

import kr.co.ginong.web.config.security.WebUserDetails;
import kr.co.ginong.web.entity.order.Location;
import kr.co.ginong.web.service.order.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
public class PopupController {

    @Autowired
    LocationService service;

    @GetMapping("/location-pop")
    public String locationOpen (
                                Model model
                                ,@AuthenticationPrincipal WebUserDetails userDetails
    ){
        Long memberId = 0L;

        if (userDetails!=null)
            memberId = userDetails.getId();

        List<Location> list = service.getListAllByMemberID(memberId);

        model.addAttribute("locationList",list);

        return "/user/popup/location-pop";
    }


}
