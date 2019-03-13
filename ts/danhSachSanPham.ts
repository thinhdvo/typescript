import { SanPham} from './SanPham';
export class DanhSachSanPham{
    public mangSanPham: SanPham[] = [];
    constructor(){

    }
    public ThemSanPham(sanPham: SanPham) {
        this.mangSanPham.push(sanPham);
    }
}