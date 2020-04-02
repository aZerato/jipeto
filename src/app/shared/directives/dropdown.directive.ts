import { Directive, HostListener, Renderer2, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[data-toggle="dropdown"]',
}) 
export class DropdownDirective implements OnInit 
{
    private _isOpen:boolean = false;
    private _dropdownMenuEl: Node;

    constructor(private _renderer: Renderer2, private _elRef: ElementRef) { }

    ngOnInit() {
        const parentEl = this._elRef.nativeElement.parentElement;
        this._dropdownMenuEl = parentEl.getElementsByClassName('dropdown-menu')[0];
    }

    @HostListener('document:click', ['$event'])
    onMouseClick(event: any) {
        if (this._isOpen)
        {
            this._renderer.setAttribute(this._elRef.nativeElement, 'aria-expanded', 'false');
            this._renderer.removeClass(this._dropdownMenuEl, 'show');
            this._isOpen = false;
        }
        else if (event.toElement === this._elRef.nativeElement ||
            event.toElement === this._dropdownMenuEl)
        {
            this._renderer.setAttribute(this._elRef.nativeElement, 'aria-expanded', 'true');
            this._renderer.addClass(this._dropdownMenuEl, 'show');
            this._isOpen = true;
        }
    }
}