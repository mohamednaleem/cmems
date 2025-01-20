import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { InterrogatorsTableData } from '../models/interrogators.model';
import { InterrogatorsMockData } from './mock-json';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InterrogatorsService {
  private getInterrogatorsData = new BehaviorSubject<InterrogatorsTableData | null>(null);

  interrogatorData$ = this.getInterrogatorsData.asObservable();

  // private apiUrl = 'https://care.q3-hfcloudaks.products.abbott/interrogators.json';
  private apiUrl = 'https://care.q3-hfcloudaks.products.abbott/interrogators.json';

  constructor(private http: HttpClient) {}

  getInterrogators(draw: number, start: number, length: number): Observable<any> {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      Cookie: `TS01187464=01ff76f95691e53a695e2c2fd25d25c426fde687fc05dae5f007febb617023fee8b964fd39ccfb935d369ce1b5b695587f1fd5e12125a5ed7652682a56e47558c11f829c48; 
        _hal_session=TkWJkWwBFzN3CA%2BAehDL9f5UL9QaqBrNz%2FGfQKqXm1NjWt1dc1M6spQ%2FihnYw83T%2B0EtWWscmlbYljlwp%2BChfvSOEgmeG8MjpSYZvSHo0cfJzVqeCEvd%2B6ClEUdow6PUk0odMyHUNIgLDLQyJFu0a0uD3sgmu7rlPG2d8gL4eIrID80MXbPc8N%2BR2DhlOWTkP%2BVR7IOgJwnAYWlIOLuRwBtBYbl6zxwmvXdIu6tKFe9KLm11xUxn5QcZu7Qm7hKw6zC%2BaEa%2BQvwUPbHY6uY9LOG4fnTyrvQYXzV974xUZBkE21P5vH0Zj6rLxAwN%2FlrHxxnvy0QSf8MVwH2E98IP9yGdT8wfrrfB8lwRXodBYe3F3Ml90lwC76aSrju6r2lqVVkTnuuWQZD13%2BF5KYxxxkN03vBTf21FXQZFgy%2BkYoeNWIfOTi8wZoqWwP610%2F0PGE1K3UjOeRQ%3D--5dRcj47dowkUzVbv--sPBAoWlohxmnWbZem7Vl%2FQ%3D%3D`,
    });

    const params = new HttpParams()
      .set(
        'Cookie',
        `TS01187464=01ff76f956c3305f3b638488483d8f04abdb78a6abbfe064c7a71ddbb4465efc9402e69bcba618e30fe8642ac05ad3732852060a53ee124de57081687c5b1e46364d8880a1; 
      _hal_session=waKn97VQ%2FkWDCRr2bS6hHWEttln%2B1wp8ezR0lK%2BOq8dATJPhRpw0DzvF91hQwwAR8vFFmw4poIUi27fYiWZEv%2FEkUM6pypbIOZSW66nMj7vIDsU0UFcuW2%2F08%2Ffh%2BFh9kvfLbKBDEqMgBbgNM8iDN5I8Uvpezu8t%2BbDxrKvOlDgHGfYLZOA6bI%2F7lxUvvp5KMqx5gaF0XEbHjI8PECrV6NPBQHR%2Bbd7REcJXy3N3gefjLxMTNmgDrj6cNxbQpXLfy7rrb88szYX2TtpNAfx3M7Rf6zdACDr%2FoPqqSiNHZPp6TfXZ%2BYxue%2Bxcp%2BEFCpCF8TtS%2BzBXflGenO0xfM0GjBhxhzcXFS%2FHk7T2iF5XhJKFO6wkPHdiPmym4PurDS%2F1zfdRALqWsRQWT8p1IeBAK%2Fc7J3R%2BE0Rd2o2rLZ5AJvfBmHiNEOaNzxnm8BC4RNHVJXIwPIBmZt8%3D--jKQy2WcuvnDiWtAB--BYIuCwoOl6m%2BGvKoF1NJ5w%3D%3D; Path=/; Expires=Sun, 23 Nov 2025 01:37:41 GMT;`
      )
      .set('draw', draw.toString())
      .set('columns[0][data]', 'serial')
      .set('columns[0][searchable]', 'true')
      .set('columns[0][orderable]', 'true')
      .set('columns[0][search][value]', '')
      .set('columns[0][search][regex]', 'false')
      .set('columns[1][data]', 'model_number')
      .set('columns[1][searchable]', 'true')
      .set('columns[1][orderable]', 'true')
      .set('columns[1][search][value]', '')
      .set('columns[1][search][regex]', 'false')
      .set('columns[2][data]', 'state')
      .set('columns[2][searchable]', 'true')
      .set('columns[2][orderable]', 'true')
      .set('columns[2][search][value]', '')
      .set('columns[2][search][regex]', 'false')
      .set('columns[3][data]', 'current_version')
      .set('columns[3][searchable]', 'true')
      .set('columns[3][orderable]', 'true')
      .set('columns[3][search][value]', '')
      .set('columns[3][search][regex]', 'false')
      .set('columns[4][data]', 'expected_version')
      .set('columns[4][searchable]', 'true')
      .set('columns[4][orderable]', 'true')
      .set('columns[4][search][value]', '')
      .set('columns[4][search][regex]', 'false')
      .set('order[0][column]', '0')
      .set('order[0][dir]', 'asc')
      .set('start', start.toString())
      .set('length', length.toString())
      .set('search[value]', '')
      .set('search[regex]', 'false');

    return this.http.get<any>(this.apiUrl, { headers, params, withCredentials: true });
  }

  announceInterrogatorsData(data: InterrogatorsTableData): void {
    this.getInterrogatorsData.next(data);
  }
}
