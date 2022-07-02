module daikincity.ui.application.library
{
    export class DCLibraryBookDocument implements IDCLibraryBook
    {
        public static DEFAULT_THUMB: string = "daikincityweb/images/buildings/library/default-book-thumb.jpg";
        public static DOWNLOAD_THUMB: string = "daikincityweb/images/buildings/library/library-download.png";
        public static IMAGE_THUMB: string = "daikincityweb/images/buildings/library/library-image-thumb.png";
        public static WORD_DOC_THUMB: string = "daikincityweb/images/buildings/library/library-word-document-thumb.png";
        public static POWERPOINT_THUMB: string = "daikincityweb/images/buildings/library/library-powerpoint-thumb.png";
        public static EXCEL_THUMB: string = "daikincityweb/images/buildings/library/library-excel-thumb.png";
        public static ZIP_THUMB: string = "daikincityweb/images/buildings/library/library-zip-thumb.png";
        public static URL_THUMB: string = "daikincityweb/images/buildings/library/library-url-thumb.png";

        public document: daikincity.building.library.DCLibraryDocument
        public element: HTMLAnchorElement;
        private imgElement: HTMLImageElement;

        constructor(doc: daikincity.building.library.DCLibraryDocument)
        {
            this.document = doc;
            this.element = document.createElement("a");
            this.element.href = this.document.path;
            this.element.target = "_blank";
            $(this.element).addClass("book");
            $(this.element).addClass("book-document");

            this.imgElement = document.createElement("img");
            this.imgElement.onerror = () => this.onImageLoadError();
            this.imgElement.src = this.document.thumb.length ? this.document.thumb : this.getThumb();

            var titleContainerElement: HTMLDivElement = document.createElement("div");
            $(titleContainerElement).addClass("book-document-title-container");
            this.element.appendChild(titleContainerElement);

            if (this.document.thumb.length == 0)
            {
                titleContainerElement.style.backgroundImage = "url(/daikincityweb/images/buildings/library/download-icon.png)";
            }

            var titleElement: HTMLParagraphElement = document.createElement("p");
            titleElement.innerHTML = doc.name;
            titleContainerElement.appendChild(titleElement);

            this.element.appendChild(this.imgElement);
        }

        private getThumb(): string
        {
            var ext: string = this.document.path.substr(this.document.path.lastIndexOf(".") + 1).toLowerCase();
            switch (ext)
            {
                case "jpg":
                case "gif":
                case "png":
                    return DCLibraryBookDocument.IMAGE_THUMB;
                case "doc":
                case "docx":
                    return DCLibraryBookDocument.WORD_DOC_THUMB;
                case "ppt":
                case "pptx":
                case "pps":
                    return DCLibraryBookDocument.POWERPOINT_THUMB;
                case "xls":
                case "xlsx":
                    return DCLibraryBookDocument.EXCEL_THUMB;
                case "zip":
                case "7z":
                case "rar":
                    return DCLibraryBookDocument.ZIP_THUMB;
            }

            // check is url
            if (this.document.path.search(/^(ftp|http|https):\/\//) > -1)
            {
                return DCLibraryBookDocument.URL_THUMB;
            }

            return DCLibraryBookDocument.DOWNLOAD_THUMB;
        }

        private onImageLoadError(): void
        {
            this.imgElement.src = DCLibraryBookDocument.DEFAULT_THUMB;
        }
    }
} 