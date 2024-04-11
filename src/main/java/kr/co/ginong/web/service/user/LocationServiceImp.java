package kr.co.ginong.web.service.user;

import kr.co.ginong.web.entity.order.Location;
import kr.co.ginong.web.entity.order.LocationHistory;
import kr.co.ginong.web.repository.order.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LocationServiceImp implements LocationService{

    @Autowired
    LocationRepository repository;

    @Override
    public void addHistory(LocationHistory locationHistory) {
        repository.saveHistory(locationHistory);

    }

    @Override
    public Location getByMemberID(Long memberId) {
        Location location = repository.findByMemberId(memberId);
        return location;
    }

}