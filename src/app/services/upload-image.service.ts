import { Injectable } from '@angular/core';
import {AppConst} from '../constants/app-const';


@Injectable()
export class UploadImageService {

	private serverPath=AppConst.serverPath;

	filesToUpload: Array<File>;

	constructor() {
		this.filesToUpload = [];
	}

	upload(productId: number) {
		this.makeFileRequest(this.serverPath +"/product/add/image?id=" + productId, [], this.filesToUpload).then((result) => {
			console.log(result);
		}, (error) => {
			console.log(error);
		});
	}

	fileChangeEvent(fileInput: any) {
		this.filesToUpload = <Array<File>>fileInput.target.files;
	}

	makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
		return new Promise((resolve, reject) => {
			var formData: any = new FormData();
			var xhr = new XMLHttpRequest();

			if (files.length != 0) {
				for(var i = 0; i < files.length; i++) {
					formData.append("uploads[]", files[i], files[i].name);
				}
				xhr.onreadystatechange = function () {
					if (xhr.readyState == 4) {
						if (xhr.status == 200) {
							console.log("image uploaded successfully!");
						} else {
							reject(xhr.response);
						}
					}
				}

				xhr.open("POST", url, true);
				xhr.setRequestHeader("x-auth-token", localStorage.getItem("xAuthToken"));
				xhr.send(formData);
			} else {
				console.log("no image file selected");
			}


		});
	}

}
