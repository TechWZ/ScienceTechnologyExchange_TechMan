package com.s_t_e.controller;

import java.io.File;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class StudyCommunityController {
	
//	@Autowired
//	StudyCommunityService studyCommunityService;
	
	@CrossOrigin
	@PostMapping("/uploadVideo")
	public String uploadVideo(@RequestParam MultipartFile videoFile) {
		if(videoFile.isEmpty()) {
			return "无文件可上传";
		}
		String fileName = videoFile.getOriginalFilename();
		System.out.println(fileName);
        String filePath = "/Users/wz/";
        File dest = new File(filePath + fileName);
        try {
        	videoFile.transferTo(dest);
            return "上传成功";
        } catch (Exception e) {
        	e.printStackTrace();
        }
        return "上传失败";
		
	}
}
