import { Directive, HostListener, Renderer2, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[data-toggle="collapse"]',
}) 
export class CollapseDirective implements OnInit 
{
    private _isOpen:boolean = false;
    private _collapseEl;

    constructor(private _renderer: Renderer2, private _elRef: ElementRef) { }

    ngOnInit() {
        const collapseElId = this._elRef.nativeElement.dataset.target.replace('#', '');
        this._collapseEl = document.getElementById(collapseElId);
    }

    @HostListener('document:click', ['$event'])
    onMouseClick(event: any) {
        if (this._isOpen)
        {
            this._renderer.setAttribute(this._elRef.nativeElement, 'aria-expanded', 'false');
            this._renderer.addClass(this._elRef.nativeElement, 'collapsed');
            this._renderer.addClass(this._collapseEl, 'collapse');

            this._isOpen = false;
        }
        else if (!this._isOpen && (event.toElement === this._elRef.nativeElement || event.toElement === this._collapseEl))
        {
            this._renderer.setAttribute(this._elRef.nativeElement, 'aria-expanded', 'true');
            this._renderer.removeClass(this._elRef.nativeElement, 'collapsed');
            this._renderer.removeClass(this._collapseEl, 'collapse');

            this._isOpen = true;
        }
    }
}