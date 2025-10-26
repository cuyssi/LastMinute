import { TestBed } from '@angular/core/testing';
import { NoticiasCacheService } from './noticias-cache-service';

describe('NoticiasCacheService', () => {
    let service: NoticiasCacheService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NoticiasCacheService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
